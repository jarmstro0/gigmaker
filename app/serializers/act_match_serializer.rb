class ActMatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :noise_level, :profile_photo, :genres, :media_1, :media_2, :tagline, :description

  def name
    object.name.upcase
  end

  def genres
    selected = Actgenre.where(act_id: object.id).pluck(:genre_id)
    genres = []
    selected.each do |item|
      genres.push(Genrelut.find(item).genre_name)
    end
    genres
  end

end
