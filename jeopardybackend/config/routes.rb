Rails.application.routes.draw do
  get '/' => 'games#index', as: :games_index
  post '/games' => 'games#create', as: :games_create
  get '/games/:id' => 'games#show', as: :game
  get '/games/:id/admin' => 'games#admin', as: :game_admin
  get '/board' => 'board#show_board'
end
