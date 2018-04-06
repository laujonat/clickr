class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.string :title, null:false
      t.string :description

      t.timestamps
    end
  end
end
