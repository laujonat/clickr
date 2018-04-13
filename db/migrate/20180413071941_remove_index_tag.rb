class RemoveIndexTag < ActiveRecord::Migration[5.1]
  def change
    remove_index :tags, name: "index_tags_on_user_id_and_photo_id"
  end
end
