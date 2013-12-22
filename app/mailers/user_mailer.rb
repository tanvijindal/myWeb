require 'mandrill'

class UserMailer < ActionMailer::Base
  
  def welcome_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
  
  def signup_mail(user)
	@user = user
	begin
	  mandrill = Mandrill::API.new 'Wq10yB04hMHo78avmJsBjA'
	  message = {"subject" => "Thank you for signing up for Pikmoments!",
		"text"=>"We are really happy to see you!",
		"html"=>"<p>We are really happy to see you!</p>",
		"from_email" => "pikmoments@gmail.com",
		"to" => [{"email" => @user.email, "type" => "to"}]
	  }
	  async = true
	  result = mandrill.messages.send message, async
	rescue Mandrill::Error => e
	  puts "A mandrill error occurred: #{e.class} - #{e.message}"
	  raise
	end
  end
  def re_attempt_to_subscribe_mail(user)
	@user = user
	begin
	  mandrill = Mandrill::API.new 'Wq10yB04hMHo78avmJsBjA'
	  message = {"subject" => "You are already in the elite list for Pikmoments!",
		"text"=>"We are really happy to see you!",
		"from_email" => "pikmoments@gmail.com",
		"to" => [{"email" => @user.email, "type" => "to"}]
	  }
	  async = true
	  result = mandrill.messages.send message, async
	  rescue Mandrill::Error => e
	  puts "A mandrill error occurred: #{e.class} - #{e.message}"
	  raise
	end
  end
end
