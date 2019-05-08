class Api::V1::GigsController < ApplicationController

def index
  @events = Event.all.order(:date)
  render json: @events
end

def show
end

end
