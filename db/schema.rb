# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_08_193251) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "acts", force: :cascade do |t|
    t.string "name", null: false
    t.string "tagline"
    t.string "description", null: false
    t.string "home_zip"
    t.integer "travel_radius"
    t.string "noise_level", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_photo"
    t.index ["user_id"], name: "index_acts_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.date "date", null: false
    t.time "start_time", null: false
    t.string "event_name"
    t.boolean "is_private", default: false
    t.integer "tix_price", default: 0
    t.bigint "act_id", null: false
    t.bigint "venue_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["act_id"], name: "index_events_on_act_id"
    t.index ["venue_id"], name: "index_events_on_venue_id"
  end

  create_table "genreluts", force: :cascade do |t|
    t.string "genre_name", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.boolean "is_primary"
    t.bigint "venue_id"
    t.bigint "act_id"
    t.integer "genre_id", null: false
    t.index ["act_id"], name: "index_genres_on_act_id"
    t.index ["venue_id"], name: "index_genres_on_venue_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "act_id"
    t.integer "venue_id"
    t.boolean "is_host", default: false
    t.boolean "is_act", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "venues", force: :cascade do |t|
    t.string "name", null: false
    t.string "address_1", null: false
    t.string "address_2"
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.float "lat"
    t.float "long"
    t.integer "capacity", null: false
    t.string "noise_level", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_photo"
    t.index ["user_id"], name: "index_venues_on_user_id"
  end

end
