class AddProfilePhotoToActVenue < ActiveRecord::Migration[5.2]
  def change
    add_column :venues, :profile_photo, :string
    add_column :acts, :profile_photo, :string
  end
end
