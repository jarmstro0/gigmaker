class Api::V1::MatcherController < ApplicationController

  def index

    if current_user.is_act?
      @matches = Venue.all
      @searcher = Act.where(user_id: current_user.id)
      @type = "act"
    else
      @matches = Act.all
      @searcher = Venue.where(user_id: current_user.id)
      @type = "venue"
    end

    response = {searcher: @searcher, searcher_type: @type, matches: @matches}
    render json: response
  end

end
