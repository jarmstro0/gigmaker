class MatcherController < ApplicationController
  before_action :authorize_user

  def index
    if current_user.is_act?
      redirect_to '/matcher/venues'
    else
      redirect_to '/matcher/acts'
    end
  end

  def acts
    render "static_views/index"
  end

  def venues  
    render "static_views/index"
  end

  def authorize_user
    if !current_user.is_act && !current_user.is_host
      raise ActionController::RoutingError.new("You Must Be a Host or Performer to Use the Matcher")
    end
  end

end
