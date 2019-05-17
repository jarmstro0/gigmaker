class Api::V1::GigsController < ApplicationController

def index
  render json: Event.where(date: params[:date])
end

def show
  render json: Event.find(params[:id])
end

def create
  new_gig = Event.new(gig_params)
  if new_gig.save
    render json: new_gig.id
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
