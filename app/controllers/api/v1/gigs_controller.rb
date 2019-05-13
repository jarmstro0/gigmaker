class Api::V1::GigsController < ApplicationController

def index
  @events = Event.where(date: params[:date])
  render json: @events
end

def show
end

end
