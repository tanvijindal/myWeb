Selfstarter::Application.routes.draw do
  root :to => 'preorder#index'
  match '/preorder'               => 'preorder#index', :via => [:get,:post]
  get 'preorder/checkout'
  match '/faq'                    => 'faq#index', :via => [:get]
  match '/privacy'                    => 'privacy#index', :via => [:get]
  match '/about'               => 'about_us#index', :via => [:get]
  match '/preorder/share/:uuid'   => 'preorder#share', :via => :get
  match '/preorder/ipn'           => 'preorder#ipn', :via => :post
  match '/preorder/prefill'       => 'preorder#prefill', :via => [:get,:post]
  match '/preorder/postfill'      => 'preorder#postfill', :via => [:get,:post]
end
