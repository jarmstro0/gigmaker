class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation,
      :remember_me, :first_name, :last_name, :is_host, :is_act]
      
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) ||
    if resource.is_host?
      '/venues/new'
    elsif resource.is_act?
      '/acts/new'
    else
      '/'
    end
  end

end
