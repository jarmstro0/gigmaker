class Users::RegistrationsController < Devise::RegistrationsController

  def new
    @user = User.new
  end

  def create
    new_u = User.new(user_params)
    new_u.save
  end

private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :username, :password, :is_host, :is_act)
  end


  def after_update_path_for(resource)
    binding.pry
    
  end

end
