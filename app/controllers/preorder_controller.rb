class PreorderController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => :ipn

  def prefill
	@user_ip = request.remote_ip
    @user = User.find_or_create_by(:email => params[:email], :ip => @user_ip)
	respond_to do |format|
		format.html {redirect_to '/'}
		format.js {render :nothing => true}
	end
	#@user = User.find_or_create_by(:email => params[:email])
	#UserMailer.welcome_email(@user).deliver
	
    redirect_to '/'
  end
end
