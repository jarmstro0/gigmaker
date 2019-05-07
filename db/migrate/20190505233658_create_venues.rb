class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
        t.string :name, null: false
        t.string :address_1, null: false
        t.string :address_2
        t.string :city, null: false
        t.string :state, null: false
        t.string :zip, null: false
        t.float :lat
        t.float :long
        t.integer :capacity, null: false
        t.string :noise_level, null: false
        t.belongs_to :user, null: false
        t.timestamps
    end
  end
end
