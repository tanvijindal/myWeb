require 'mandrill'

class SubscriptionMailer < MandrillMailer::TemplateMailer
  default from: 'info@pikmoments.com'
  def welcome_template(user)
    @user = user
    mandrill_mail template: 'trial',
    subject: 'Welcome to Pikmoments',
    to: @user.email,
    important: true,
    inline_css: true,
    end
  end

end

