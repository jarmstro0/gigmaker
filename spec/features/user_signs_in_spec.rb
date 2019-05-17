require 'rails_helper'
require 'faker'

feature 'user signs in', %Q{
  As a signed up user
  I want to sign in
  So that I can regain access to my account
} do
  scenario 'specify valid credentials' do
    u_name = Faker::Alphanumeric.alpha 10
    user = {
      username: "#{u_name}",
      email: "#{u_name}@happypath.com",
      password: "password",
      first_name: "#{Faker::Name.first_name}",
      last_name: "#{Faker::Name.last_name}",
      is_act: true
    }

    visit new_user_session_path
    fill_in 'Username', with: user.username
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    expect(page).to have_content('Signed in successfully')
    expect(page).to have_content('Sign Out')
  end

  scenario 'specify invalid credentials' do
    visit new_user_session_path

    click_button 'Log in'
    expect(page).to have_content('Invalid Email or password')
    expect(page).to_not have_content('Sign Out')
  end
end
