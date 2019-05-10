class VenuesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    render "static_views/index"
  end

  def show
    render "static_views/index"
  end

  def new
    @venue = Venue.new
  end

  def create
    new_ven = Venue.new(venue_params)
    new_ven.user_id = current_user.id

    if new_ven.save
      params[:venue][:venuegenres].each do |gen|
        load_value = gen.to_i
        if load_value > 0
          Venuegenre.create!(venue_id: new_ven.id, genre_id: load_value)
        end
      end
    else
      flash.now[:error] = new_ven.errors.full_messages.join(", ")
      render action: :new
    end

    if current_user.is_act?
      redirect_to '/acts/new'
    else
      redirect_to '/'
    end
  end

  private

  def venue_params
    params.require(:venue).permit(:name, :address_1, :address_2, :city,
      :profile_photo, :state, :zip, :capacity, :noise_level)
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("You Must Be Signed In To Create a Venue")
    end
  end

end
