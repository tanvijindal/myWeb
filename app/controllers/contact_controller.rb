class ContactController < ApplicationController
  def new
    @message = Message.new
  end
  
  def create
    @message = Message.new(params[:message])
    
    if @message.valid?
      FeedbackMailer.new_message(@message).deliver
      redirect_to '/homepage', :alert => "Message was successfully sent."
	  else
      render 'new'
    end
  end
end
