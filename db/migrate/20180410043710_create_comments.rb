class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :photo_id, null: false
      t.string :user_id, null:false
      t.text :body, null:false

      t.timestamps
    end

  end
end
