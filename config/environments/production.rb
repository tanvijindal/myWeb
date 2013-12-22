Selfstarter::Application.configure do

  # Code is not reloaded between requests
  config.cache_classes = true

  # Full error reports are disabled and caching is turned on
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Disable Rails's static asset server (Apache or nginx will already do this) (Tanvi: was false)
  config.serve_static_assets = true

  # Compress JavaScripts and CSS
  config.assets.compress = true

  # Don't fallback to assets pipeline if a precompiled asset is missed (Tanvi : was false)
  config.assets.compile = true
  
  # Generate digests for assets URLs
  config.assets.digest = true

  # Precompile additional assets (application.js, application.css, and all non-JS/CSS are already added)
  config.assets.precompile += %w( application.js application.css  )

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation can not be found)
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners
  config.active_support.deprecation = :notify

  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = false
  config.action_mailer.default :charset => "utf-8"
  config.action_mailer.default_url_options = { :host => "www.pikmoments.com" }

  config.action_mailer.delivery_method = :smtp

  config.action_mailer.smtp_settings = {
    :address => "smtp.gmail.com",
    :port => "587",
    :user_name => "pikmoments@gmail.com",
	enable_starttls_auto: true,
    :password => "Inlol@nt1",
    :authentication => :plain
  }
  
end
