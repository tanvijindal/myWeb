class HomepageController < ApplicationController
  def index
  end
  
  def subscribe
    @user_ip = request.remote_ip
	@user = User.find_by(:email => params[:email])
	
	if(@user)
	  @user.update(:updated_at => Time.now)
	  UserMailer.welcome_email(@user).deliver
	  respond_to do |format|
		format.html {redirect_to '/'}
		format.js {render :nothing => "true"}
	  end
	else
	  @user = User.find_or_create_by(:email => params[:email], :ip => @user_ip)
	  if @user
		UserMailer.welcome_email(@user).deliver
		respond_to do |format|
		  format.html {redirect_to '/'}
		  format.js {render :nothing => "true"}
		end
		else
		respond_to do |format|
		  format.html {redirect_to '/'}
		  format.js {redirect_to '/'}
		end
	  end
	end
  end

end
