class ChangeColumnAlbums < ActiveRecord::Migration[5.1]
  def change
    change_column :albums, :description, :string, :null => true
  end
end
