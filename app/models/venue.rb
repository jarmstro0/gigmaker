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
  has_many :events

  after_validation :get_geo, on: [:create, :update]

  scope :busy_on, ->(date) { joins(:events).where(events: {date: date}) }

  scope :available_on, ->(date) {where.not(id: busy_on(date).select(:id))}

  def get_geo
    response = RestClient.get "https://maps.googleapis.com/maps/api/geocode/json?address=#{self.address_1}$components=postal_code:#{self.zip}&key=#{ENV['GOOGLE_MAPS_API_KEY']}"
    response = JSON.parse(response)
    location = response["results"][0]["geometry"]["location"]
    self.lat = location["lat"]
    self.long = location["lng"]
  end

end
