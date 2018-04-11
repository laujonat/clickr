class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :user_id, null:false
      t.text :description
      t.string :name, null:false

      t.timestamps
    end
    add_index :albums, [:user_id, :name], unique: true
  end
end
