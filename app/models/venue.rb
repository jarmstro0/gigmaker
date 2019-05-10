class Venue < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader

  validates :name, presence: true
  validates :address_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :capacity, presence: true
  validates :noise_level, presence: true
  validates :user_id, presence: true

  has_many :venuegenres
end
