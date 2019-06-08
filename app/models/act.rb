class Act < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader

  validates :name, presence: true
  validates :description, presence: true
  validates :noise_level, presence: true
  validates :user_id, presence: true

  has_many :actgenres
  has_many :events

  after_validation :get_geo, on: [:create, :update]

  scope :busy_on, ->(date) { joins(:events).where(events: {date: date}) }

  scope :available_on, ->(date) {where.not(id: busy_on(date).select(:id))}

  private

  def get_geo
    response = RestClient.get "https://maps.googleapis.com/maps/api/geocode/json?components=country:US|postal_code:#{self.home_zip}&key=#{ENV['GOOGLE_MAPS_API_KEY']}"
    response = JSON.parse(response)
    location = response["results"][0]["geometry"]["location"]
    self.lat = location["lat"]
    self.long = location["lng"]
  end

end
