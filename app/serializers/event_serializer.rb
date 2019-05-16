class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :act_name, :venue_name, :date, :time, :tix_price, :photo, :lat, :long, :address_1, :address_2, :city, :state

  def date
    object.date.strftime("%B %e")
  end

  def event_name
    if object.event_name
      object.event_name.upcase
    end
  end

  def time
    object.start_time.strftime("%l:%M %p")
  end

  def venue_name
    "#{Venue.where(id: object.venue_id)[0].name}"
  end

  def act_name
    "#{Act.where(id: object.act_id)[0].name.upcase}"
  end

  def photo
    "#{Act.where(id: object.act_id)[0].profile_photo}"
  end

  def lat
    "#{Venue.where(id: object.venue_id)[0].lat}"
  end

  def long
    "#{Venue.where(id: object.venue_id)[0].long}"
  end

  def address_1
    "#{Venue.where(id: object.venue_id)[0].address_1}"
  end

  def address_2
    "#{Venue.where(id: object.venue_id)[0].address_2}"
  end

  def city
    "#{Venue.where(id: object.venue_id)[0].city}"
  end

  def state
    "#{Venue.where(id: object.venue_id)[0].state}"
  end

end
