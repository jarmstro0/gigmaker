class Event < ApplicationRecord
  validates :date, presence: true
  validates :start_time, presence: true
  validates :act_id, presence: true
  validates :venue_id, presence: true

  belongs_to :act
  belongs_to :venue

  def self.act_busy_on(date)
    where(date: date).pluck(:act_id)
  end

  def self.venue_busy_on(date)
    where(date: date).pluck(:venue_id)
  end
end
