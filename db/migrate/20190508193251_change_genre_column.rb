class ChangeGenreColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :genres, :genre
    add_column :genres, :genre_id, :integer, null: false
  end
end
