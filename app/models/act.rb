class Act < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :noise_level, presence: true
  validates :user_id, presence: true
end
