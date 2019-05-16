# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
to_make = 10


# ------------------------------
#  CREATE ACTS AND ASSOCIATED USERS
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
end

Act.create(
name: "D Money, Smoothie, and Shifty",
tagline: "CT is in the hizzle!",
description: "Musical thugs who come up from Connecticut to invade your quiet beach community and deflower your ears with a dope sound. We mainely prefer to play DownEast, like in Paradise City.",
home_zip: "06101",
travel_radius: "250",
noise_level: "11",
user_id: 8
)

Act.create(
name: "The Oneders",
tagline: "I wonder what happened to the Oneders",
description: "British Invasion-flavored pop music performed by a clean-cut quartet of nice boys from Erie PA.",
home_zip: "16501",
travel_radius: "400",
noise_level: "Quiet",
user_id: 2
)

Act.create(
name: "The Thamesmen",
tagline: "Late 60s British Psychedelia",
description: "The band that dares to ask the musical question - 'What if Spinal Tap was born as a swinging skiffle band?' Flower suits, bowl haircuts, a sitar and a song called Gimme Some Money - what more do you need to know?",
home_zip: "02543",
travel_radius: "150",
noise_level: "Quiet",
user_id: 1
)

Act.create(
name: "Mouse Rat",
tagline: "5,000 times better than . . .",
description: "We play a unique fusion of 70's soft-rock and late 80's hard-core. Our influences include Albinoni, Black Flag, and The Oneders.",
home_zip: "62558",
travel_radius: "50",
noise_level: "Reasonable",
user_id: 3
)

Act.create(
name: "Scarecrow Boat",
tagline: "Yacht rock for a new generation",
description: "We got our start as the backup band for Keytar Bear and our musical journey has since taken us on busking tours of T stations throughout the greater Boston area. Our unique blend of Gamelan and Emo/Shoegaze influences will get you on your feet and moving!",
home_zip: "02138",
travel_radius: "45",
noise_level: "Reasonable",
user_id: 4
)

Act.create(
name: "Scrantonicity",
tagline: "Scranton's Premiere Warehouse Band",
description: "We are a anarchosyndicalist collective that gather periodically at the warehouse we work in to perform our unique brand of scat-disco.",
home_zip: "18503",
travel_radius: "600",
noise_level: "Loud",
user_id: 5
)

Act.create(
name: "Scrantonicity 2",
tagline: "Scranton's Newest Warehouse Band",
description: "Made up of musicians who first played together in another band, SC2 remains faithful to the original roots-warehouse sound that certain other bands that will remain unnamed have recklessly abandoned.  SC2 will travel more farther too.",
home_zip: "18503",
travel_radius: "1000",
noise_level: "Loud",
user_id: 6
)

Act.create(
name: "Cap'n Geech and the Shrimp Shack Shooters",
tagline: "Every day is like Weekend at Party Pier!",
description: "Not-too-realistic 60s beach party pop that makes an excellent soundtrack for a game of beach blanket bingo.  Please note that we will need a PA for playback as we don't actually play any of our instruments.",
home_zip: "02139",
travel_radius: "25",
noise_level: "Loud",
user_id: 7
)

Act.create(
name: "The Shaggs",
tagline: "Daddy made us do it",
description: "We were just a bunch of kids when our Father had a vision that predicted our rise to musical stardom.  Rolling Stone has described us as 'sounding like lobotomized von Trapp Family singers' and Terry Adams of NRBQ compared our music to that of Ornette Coleman.",
home_zip: "03044",
travel_radius: "75",
noise_level: "11",
user_id: 9
)

Act.create(
name: "Otter and Crenshaw",
tagline: "Smooth sounds to tame the savage heart",
description: "Seals and Crofts meets Beaver and Krause with a sprinkling of England Dan and John Ford Coley. If there's a summer breeze blowing your stars around then you'd really love to see us play tonight!",
home_zip: "02140",
travel_radius: "250",
noise_level: "11",
user_id: 10
)


# ---------------------------------
#  CREATE VENUES AND ASSOCIATED USERS

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

end


Venue.create(
  name: "John's Hizzang",
  address_1: "86 Oxford St",
  city:  "Cambridge",
  state:  "MA",
  zip:  "02138",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "11",
  user_id: 11
)

Venue.create(
  name: "Scout's Garage",
  address_1: "60 Glen Rd",
  city:  "Brookline",
  state:  "MA",
  zip:  "02445",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "11",
  user_id: 12
)

Venue.create(
  name: "Stately Wayne Manor",
  address_1: "60 Quissett Ave",
  city:  "Woods Hole",
  state:  "MA",
  zip:  "02543",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "Quiet",
  user_id: 13
)

Venue.create(
  name: "Earl's Garage",
  address_1: "13 Harrison St",
  city:  "Somerville",
  state:  "MA",
  zip:  "02143",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "Loud",
  user_id: 14
)

Venue.create(
  name: "Chris' Crib",
  address_1: "91 Prentiss St",
  city:  "Cambridge",
  state:  "MA",
  zip:  "02140",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "Moderate",
  user_id: 15
)

Venue.create(
  name: "Kweiliegh's House",
  address_1: "120 Oxford St",
  city:  "Cambridge",
  state:  "MA",
  zip:  "02140",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "Moderate",
  user_id: 16
)

Venue.create(
  name: "The Abbey",
  address_1: "1755 Massachusetts Ave",
  city:  "Cambridge",
  state:  "MA",
  zip:  "02140",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "Quiet",
  user_id: 17
)

Venue.create(
  name: "Danya's Dungeon",
  address_1: "88 Waltham St",
  city:  "Boston",
  state:  "MA",
  zip:  "02118",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "Moderate",
  user_id: 18
)

Venue.create(
  name: "7Deck7",
  address_1: "77 Summer St",
  city:  "Boston",
  state:  "MA",
  zip:  "02111",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "11",
  user_id: 19
)

Venue.create(
  name: "Argosy Gallery",
  address_1: "110 Main St",
  city:  "Bar Harbor",
  state:  "ME",
  zip:  "04609",
  capacity: Faker::Number.between(1, 8)*5,
  noise_level: "11",
  user_id: 20
)


200.times do
  Event.create(
    act_id: Faker::Number.between(1, to_make),
    venue_id: Faker::Number.between(1, to_make),
    tix_price: Faker::Number.between(0, 8) * 5,
    date: Faker::Date.between(Date.today, 1.month.from_now),
    start_time: Faker::Time.forward(5, :evening),
    event_name: "#{Faker::Marketing.buzzwords}"
  )
end

# -------------------------------
# SEED GENRE LOOKUP TABLE

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
