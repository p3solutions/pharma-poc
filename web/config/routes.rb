Rails.application.routes.draw do
  resources :sales_representatives
  resources :doctors
  root 'sales_representatives#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
