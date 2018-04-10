class AddAttachmentCoverPhotoToAlbums < ActiveRecord::Migration
  def self.up
    change_table :albums do |t|
      t.attachment :cover_photo
    end
  end

  def self.down
    remove_attachment :albums, :cover_photo
  end
end
