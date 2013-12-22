class HomepageController < ApplicationController
  def index
  end
  
  def subscribe
    @user_ip = request.remote_ip
	@user = User.find_or_create_by(:email => params[:email], :ip => @user_ip)
	
	if(@user)
	  respond_to do |format|
		format.html {redirect_to '/'}
		format.js {render :nothing => "true"}
	  end
	end
  end
end
