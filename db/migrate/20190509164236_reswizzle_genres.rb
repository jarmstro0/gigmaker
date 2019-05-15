class ReswizzleGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :venuegenres do |t|
      t.integer :genre_id, null: false
      t.belongs_to :venue
    end

    create_table :actgenres do |t|
      t.integer :genre_id, null: false
      t.belongs_to :act
    end

    drop_table :genres
  end
end
