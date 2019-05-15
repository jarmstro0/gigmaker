class AddGenreLut < ActiveRecord::Migration[5.2]
  def change
    create_table :genreluts do |t|
      t.string :genre_name, null: false
    end
  end
end
