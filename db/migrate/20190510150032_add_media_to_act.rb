class AddMediaToAct < ActiveRecord::Migration[5.2]
  def change
      add_column :acts, :media_1, :string
      add_column :acts, :media_2, :string
  end
end
