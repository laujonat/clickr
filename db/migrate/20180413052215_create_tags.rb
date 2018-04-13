class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.integer :photo_id, null: false
      t.string :body, null: false
      
      t.timestamps
    end
    add_index :tags, [:user_id, :photo_id], unique: true
  end
end
