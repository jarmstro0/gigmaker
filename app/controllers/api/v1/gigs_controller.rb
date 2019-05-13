class Api::V1::GigsController < ApplicationController

def index
  puts params[:date]
  events = Event.where(date: params[:date])
  puts events
  render json: events
end

def show
end

end
