class Api::V1::GigsController < ApplicationController

def index
  puts params[:date]
  events = Event.where(date: params[:date])
  puts events
  render json: events
end

def show
  events = Event.find(params[:id])
  render json: events
end

def create
  new_gig = Event.new(gig_params)
  if new_gig.save
    redirect_to '/'
  else
    flash.now[:error] = new_gig.errors.full_messages.join(", ")
    render action: :new
  end

end

private
def gig_params
  params.require(:gig).permit(:act_id, :venue_id, :date, :start_time, :tix_price)
end

end
