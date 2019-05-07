class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :genre, null: false
      t.boolean :is_primary
      t.belongs_to :venue
      t.belongs_to :act  
    end
  end
end
