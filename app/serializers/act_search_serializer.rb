class ActSearchSerializer < ActiveModel::Serializer
  attributes :id, :name, :noise_level, :genres, :lat, :long

  def genres
    selected = Actgenre.where(act_id: object.id).pluck(:genre_id)
    genres = []
    selected.each do |item|
      genres.push(Genrelut.find(item).genre_name)
    end

    genres
  end

end
