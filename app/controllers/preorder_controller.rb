class PreorderController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => :ipn

  def index
  end
  
  end
