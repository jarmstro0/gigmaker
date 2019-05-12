class ActsController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    render "static_views/index"
  end

  def show
    render "static_views/index"
  end

  def new
    @act = Act.new
    @genres = Genrelut.all
  end

  def create
    new_act = Act.new(act_params)
    new_act.user_id = current_user.id

    if new_act.save
      params[:act][:actgenres].each do |gen|
        load_value = gen.to_i
        if load_value > 0
          Actgenre.create(act_id: new_act.id, genre_id: load_value)
        end
      end
      flash.now[:notice] = "Act created successfully"
      redirect_to '/'
    else
      flash.now[:error] = new_ven.errors.full_messages.join(", ")
      render action: :new
    end
  end

  private

  def act_params
    params.require(:act).permit(:name, :tagline, :description, :travel_radius,
      :profile_photo, :home_zip, :noise_level, :media_1, :media_2)
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("You Must Be Signed In To Create a New Act")
    end
  end

end
