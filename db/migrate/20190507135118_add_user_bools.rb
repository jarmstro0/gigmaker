class AddUserBools < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_host, :boolean, default: false
    add_column :users, :is_act, :boolean, default: false
  end
end
