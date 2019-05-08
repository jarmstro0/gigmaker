Rails.application.routes.draw do
  devise_for :users
  root 'homes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :venues, only: [:index, :show, :new, :create]
  resources :acts, only: [:index, :show, :new, :create]
  resources :matcher, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :gigs, only: [:index, :show]
      resources :matcher, only: [:index]
    end
  end
end
