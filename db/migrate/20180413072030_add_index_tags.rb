class AddIndexTags < ActiveRecord::Migration[5.1]
  def change
    add_index :tags, [:photo_id, :body], unique: true 
  end
end
