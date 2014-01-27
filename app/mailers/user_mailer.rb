class UserMailer < ActionMailer::Base
  default from: 'pikmoments@gmail.com'
  
  def welcome_email(user)
    @user = user
    @url  = 'http://www.pikmoments.com'
    mail :to => @user.email,
		 :subject => 'Pikmoments: Capture beautiful moments automatically'
  end
  
  
  def signup_mail(user)
	@user = user
	begin
	  mandrill = Mandrill::API.new ENV['MANDRILL_APIKEY']
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
	  mandrill = Mandrill::API.new ENV['MANDRILL_APIKEY']
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
