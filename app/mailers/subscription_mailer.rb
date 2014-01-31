class SubscriptionMailer < MandrillMailer::TemplateMailer
  default from: 'info@pikmoments.com'
  
  def welcome(user)
	@user = user	
    mandrill_mail :template => 'WebEmail',
	:subject => 'PikMoments: Capture amazing moments automatically',
	:to => @user.email,
	important: true,
	inline_css: true
  end
end