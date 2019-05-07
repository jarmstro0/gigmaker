class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :date, null: false
      t.time :start_time, null: false
      t.string :event_name
      t.boolean :is_private, default: false
      t.integer :tix_price, default: 0
      t.belongs_to :act, null: false
      t.belongs_to :venue, null: false
      t.timestamps
    end
  end
end
