class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :genus
      t.string :description
      t.string :imageurl
      t.string :plantingnotes

      t.timestamps
    end
  end
end
