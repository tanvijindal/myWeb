require 'mandrill'

class SubscriptionMailer < ApplicationController
  
  def signup_mail()
	begin
	  mandrill = Mandrill::API.new 'GgbLEcHFNN8aiib6cxaW0w'
	  message = {"subject" => "Thank you for signing up for Pikmoments!",
		"text"=>"We are really happy to see you!",
		"from_email" => "pikmoments@gmail.com",
		"to" => [{"email" => "jindal.tanvi@gmail.com", "name" => "tanvi", "type" => "to"}]
	  }
	  async = false
	  result = mandrill.messages.send message, async
	rescue Mandrill::Error => e
	  puts "A mandrill error occurred: #{e.class} - #{e.message}"
	  raise
	end
  end

end

