class Event < ApplicationRecord
  validates :date, presence: true
  validates :start_time, presence: true
  validates :act_id, presence: true
  validates :venue_id, presence: true

  belongs_to :act
  belongs_to :venue

end
