class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :act_name, :venue_name, :date, :time, :tix_price, :photo

  def date
    object.date.strftime("%B %e")
  end


  def event_name
    object.event_name.upcase
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

end
