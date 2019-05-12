class VenueSearchSerializer < ActiveModel::Serializer
  attributes :id, :name, :noise_level, :genres

  def genres
    selected = Venuegenre.where(venue_id: object.id).pluck(:genre_id)
    genres = []
    selected.each do |item|
      genres.push(Genrelut.find(item).genre_name)
    end

    genres
  end

end
