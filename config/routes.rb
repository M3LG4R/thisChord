Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :show, :index, :edit, :destroy]
    resources :messages, only: [:create, :show, :index, :edit, :destroy]
    resources :servers, only: [:create, :show, :index, :edit, :destroy] do
    collection do 
        post "join"
        delete "leave"
      end
    end
  end
  mount ActionCable.server, at: '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
