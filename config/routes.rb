Selfstarter::Application.routes.draw do
  get "homepage/index"
  match '/homepage'    => 'homepage#index', :via => [:get,:post]
  root :to => 'homepage#index'
  match '/preorder'               => 'preorder#index', :via => [:get,:post]
  match '/faq'                    => 'faq#index', :via => [:get]
  match '/privacy'                    => 'privacy#index', :via => [:get]
  match '/about'               => 'about_us#index', :via => [:get]
  match '/homepage/subscribe'    => 'homepage#subscribe', :via => [:get,:post]
  
  match 'contact' => 'contact#new', :via => [:get]
  match 'contact' => 'contact#create', :via => [:post]
end
