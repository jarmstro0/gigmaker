class Api::V1::GigsController < ApplicationController

def index

  @events = Event.all
  render json: @events
end

def show
end

end
