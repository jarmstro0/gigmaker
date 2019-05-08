class Act < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader

  validates :name, presence: true
  validates :description, presence: true
  validates :noise_level, presence: true
  validates :user_id, presence: true

  has_many :genres
end
