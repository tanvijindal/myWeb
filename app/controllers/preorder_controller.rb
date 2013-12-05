class PreorderController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => :ipn

  def prefill
    @user = User.find_or_create_by(:email => params[:email])
    redirect_to '/preorder/checkout'
  end
end
