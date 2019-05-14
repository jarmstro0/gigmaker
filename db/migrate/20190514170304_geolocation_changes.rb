class GeolocationChanges < ActiveRecord::Migration[5.2]
  def change
    add_column :acts, :lat, :float
    add_column :acts, :long, :float

    remove_column :users, :act_id
    remove_column :users, :venue_id
  end
end
