class FeedbackMailer < ActionMailer::Base
  default from: 'info@pikmoments.com'
  default :to => 'tanvi@pikmoments.com'
  
  def new_message(message)
    @message = message
    mail(:subject => "Pikmoments_UserMessage #{message.subject}")
  end


end
