# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# to_make = 20
# to_make.times do
#   u_name = Faker::Alphanumeric.alpha 10
#   user = User.create(
#     username: "#{u_name}",
#     email: "#{u_name}@happypath.com",
#     password: "password",
#     first_name: "#{Faker::Name.first_name}",
#     last_name: "#{Faker::Name.last_name}",
#     is_act: true
#   )
#
#   act = Act.create(
#     user_id: user.id,
#     name: "#{Faker::Music::RockBand.name}",
#     tagline: "#{Faker::Company.catch_phrase}",
#     description: "#{Faker::Hacker.say_something_smart}",
#     travel_radius: Faker::Number.between(25, 100),
#     noise_level: "11",
#     home_zip: "02138"
#   )
#
# end
#
# to_make.times do
#   u_name = Faker::Alphanumeric.alpha 10
#   user = User.create(
#     username: "#{u_name}",
#     email: "#{u_name}@happypath.com",
#     password: "password",
#     first_name: "#{Faker::Name.first_name}",
#     last_name: "#{Faker::Name.last_name}",
#     is_host: true
#   )
#
#   venue = Venue.create(
#     user_id: user.id,
#     name: "#{user.first_name}'s Hizzle",
#     address_1: "#{Faker::Address.street_address}",
#     city: "#{Faker::Address.city}",
#     state: "#{Faker::Address.state_abbr}",
#     zip: "02138",
#     capacity: 30,
#     noise_level: "11"
#   )
#
# end
#
# 100.times do
#   Event.create(
#     act_id: Faker::Number.between(1, to_make),
#     venue_id: Faker::Number.between(1, to_make),
#     tix_price: Faker::Number.between(0, 8) * 5,
#     date: Faker::Date.forward(5),
#     start_time: Faker::Time.forward(5, :evening),
#     event_name: "#{Faker::Marketing.buzzwords}"
#   )
# end

  Genrelut.create(genre_name: "Country")
  Genrelut.create(genre_name: "Heavy Metal")
  Genrelut.create(genre_name: "Singer-Songwriter")
  Genrelut.create(genre_name: "Shoegaze")
  Genrelut.create(genre_name: "Hip-Hop")
  Genrelut.create(genre_name: "Easy Listening")
  Genrelut.create(genre_name: "World Music")
  Genrelut.create(genre_name: "70s Soft Rock")
  Genrelut.create(genre_name: "Disco")
  Genrelut.create(genre_name: "Classical")
  Genrelut.create(genre_name: "Rock and Roll")
  Genrelut.create(genre_name: "Prog Rock")
