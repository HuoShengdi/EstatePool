Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :accounts, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :investments, only:[:create, :index, :show, :update]
    resources :offerings, param: :name, only:[:create, :index, :show, :update]
  end

end
