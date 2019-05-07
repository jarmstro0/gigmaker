class CreateActsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :acts do |t|
      t.string :name, null: false
      t.string :tagline
      t.string :description, null: false
      t.string :home_zip
      t.integer :travel_radius
      t.string :noise_level, null: false
      t.belongs_to :user, null: false
      t.timestamps
    end
  end
end
