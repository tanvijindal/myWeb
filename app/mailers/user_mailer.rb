require 'mandrill'

class UserMailer < ActionMailer::Base
  
	def signup_mail(user)
	  @user = user
	  begin
		mandrill = Mandrill::API.new 'GgbLEcHFNN8aiib6cxaW0w'
		message = {"subject" => "Thank you for signing up for Pikmoments!",
		  "text"=>"We are really happy to see you!",
		  "from_email" => "pikmoments@gmail.com",
		  "to" => [{"email" => @user.email, "type" => "to"}]
		}
		async = false
		result = mandrill.messages.send message, async
	  rescue Mandrill::Error => e
		puts "A mandrill error occurred: #{e.class} - #{e.message}"
		raise
	  end
	end
	def re_attempt_to_subscribe_mail(user)
	  @user = user
	  begin
		mandrill = Mandrill::API.new 'GgbLEcHFNN8aiib6cxaW0w'
		message = {"subject" => "You are already in the elite list for Pikmoments!",
		  "text"=>"We are really happy to see you!",
		  "from_email" => "pikmoments@gmail.com",
		  "to" => [{"email" => @user.email, "type" => "to"}]
		}
		async = false
		result = mandrill.messages.send message, async
		rescue Mandrill::Error => e
		puts "A mandrill error occurred: #{e.class} - #{e.message}"
		raise
	  end
	end
end
