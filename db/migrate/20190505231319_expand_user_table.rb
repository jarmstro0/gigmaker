class ExpandUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :act_id, :integer
    add_column :users, :venue_id, :integer
  end
end
