class Venuegenre < ApplicationRecord
  validates :genre_id, presence: true, numericality: true
  validates :venue_id, presence: true, numericality: true

  belongs_to :venue
end
