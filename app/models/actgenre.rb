class Actgenre < ApplicationRecord
  validates :genre_id, presence: true, numericality: true
  validates :act_id, presence: true, numericality: true

  belongs_to :act
end
