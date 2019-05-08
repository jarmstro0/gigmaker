class MatcherController < ApplicationController
  before_action :authorize_user

  def index
    render "static_views/index"
  end

  def show
    render "static_views/index"
  end

  def authorize_user
    if !current_user.is_act && !current_user.is_host
      raise ActionController::RoutingError.new("You Must Be a Host or Performer to Use the Matcher")
    end
  end

end
