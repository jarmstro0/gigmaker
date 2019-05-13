# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'pry'
require 'faker'
to_make = 10



to_make.times do
  u_name = Faker::Alphanumeric.alpha 10
  user = User.create(
    username: "#{u_name}",
    email: "#{u_name}@happypath.com",
    password: "password",
    first_name: "#{Faker::Name.first_name}",
    last_name: "#{Faker::Name.last_name}",
    is_act: true
  )

  act = Act.create(
    user_id: user.id,
    name: "#{Faker::Music::RockBand.name}",
    tagline: "#{Faker::Company.catch_phrase}",
    description: "#{Faker::Hacker.say_something_smart}",
    travel_radius: Faker::Number.between(25, 100),
    noise_level: "11",
    home_zip: "02138"
  )

end

to_make.times do
  u_name = Faker::Alphanumeric.alpha 10
  user = User.create(
    username: "#{u_name}",
    email: "#{u_name}@happypath.com",
    password: "password",
    first_name: "#{Faker::Name.first_name}",
    last_name: "#{Faker::Name.last_name}",
    is_host: true
  )

  venue = Venue.create(
    user_id: user.id,
    name: "#{user.first_name}'s Hizzle",
    address_1: "#{Faker::Address.street_address}",
    city: "#{Faker::Address.city}",
    state: "#{Faker::Address.state_abbr}",
    zip: "02138",
    capacity: 30,
    noise_level: "11"
  )

end

100.times do
  Event.create(
    act_id: Faker::Number.between(1, to_make),
    venue_id: Faker::Number.between(1, to_make),
    tix_price: Faker::Number.between(0, 8) * 5,
    date: Faker::Date.forward(30),
    start_time: Faker::Time.forward(5, :evening),
    event_name: "#{Faker::Marketing.buzzwords}"
  )
end

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

# -------------------------
# add genres to Act and Venue
  genre_count = 1
  to_make.times do
    5.times do
      Actgenre.create(
        genre_id: Faker::Number.between(1, 12),
        act_id: genre_count)

        Venuegenre.create(
          genre_id: Faker::Number.between(1, 12),
          venue_id: genre_count)
    end
    genre_count += 1
  end


  Act.all.each do |act|
    act.media_1 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346120807&color=%23192c24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    act.media_2 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346120802&color=%23192c24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    act.save
  end


# -------------------------------
# Add pre-staged profile_photo names to act and venue
p_count = 1
to_make.times do
  act = Act.find(p_count)
  act_pic = "m#{p_count}.jpg"
  act[:profile_photo] = act_pic
  act.save

  ven = Venue.find(p_count)
  ven_pic = "lr#{p_count}.jpg"
  ven[:profile_photo] = ven_pic
  ven.save

  p_count += 1
end
