Rails.application.routes.draw do
  devise_for :users
  root 'homes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :venues, only: [:index, :show, :new, :create]
  resources :acts, only: [:index, :show, :new, :create]
  resources :matcher, only: [:index]
  resources :gigs, only: [:show]

  get 'matcher/acts', to: 'matcher#acts'
  get 'matcher/venues', to: 'matcher#venues'

  namespace :api do
    namespace :v1 do
      resources :acts, only: [:index]
      resources :gigs, only: [:index, :show, :create]
      get 'matcher/venues', to: 'matcher#venues'
      get 'matcher/acts', to: 'matcher#acts'
    end
  end
end
