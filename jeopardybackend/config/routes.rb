Rails.application.routes.draw do
  get '/' => 'games#index', as: :games_index
  post '/games' => 'games#create', as: :games_create
  get '/games/:id' => 'games#show', as: :game
  get '/board' => 'board#show_board'
end
