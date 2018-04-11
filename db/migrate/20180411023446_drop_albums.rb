class DropAlbums < ActiveRecord::Migration[5.1]
  def change
    drop_table :albums
  end
end
