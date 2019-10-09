Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :index, :edit, :destroy] do
    collection do 
        post "join"
        delete "leave"
      end
      resources :channels, only: [:create, :show, :index, :edit, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
