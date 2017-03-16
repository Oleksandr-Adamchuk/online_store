Rails.application.routes.draw do
  resources :categories do
    resources :products, only: [:index, :new, :create]
  end
  resources :products, only: [:show, :edit, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  get 'pages/index' => 'pages#index'
  get 'products' => 'products#index'
  
end
