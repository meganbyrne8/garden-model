Rails.application.routes.draw do
  resources :plants
  resources :gardens
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get 'plants/:plant_id/gardens/:garden_id', to: 'gardens#garden_to_plant'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
