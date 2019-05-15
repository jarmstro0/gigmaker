class VenueMatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :address_1, :address_2, :city, :state, :zip, :capacity, :noise_level, :profile_photo, :genres, :lat, :long

  def name
    object.name.upcase
  end

  def genres
    selected = Venuegenre.where(venue_id: object.id).distinct.pluck(:genre_id)
    genres = []
    selected.each do |item|
      genres.push(Genrelut.find(item).genre_name)
    end
    genres
  end

end
