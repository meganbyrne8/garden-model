class GardensController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy ]
  before_action :set_garden, only: [ :update, :destroy ]

  # GET /gardens
  def index
    @gardens = Garden.all

    render json: @gardens
  end

  # GET /gardens/1
  def show
    @garden = Garden.find(params[:id])

    render json: @garden, include: :plants
  end

  # POST /gardens
  def create
    @garden = Garden.new(garden_params)
    @garden.user = @current_user

    if @garden.save
      render json: @garden, status: :created
    else
      render json: @garden.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gardens/1
  def update
    if @garden.update(garden_params)
      render json: @garden
    else
      render json: @garden.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gardens/1
  def destroy
    @garden.destroy
  end

  def garden_to_plant
    @plant = Plant.find(params[:plant_id])
    @garden = Garden.find(params[:id])

    @garden.plants << @plant
    render json: @garden, include: :plants
  end


  private
    def set_garden
      @garden = @current_user.gardens.find(params[:id])
    end

    def garden_params
      params.require(:garden).permit(:name)
    end
end
