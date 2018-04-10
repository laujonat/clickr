class Album < ApplicationRecord
  validates :user_id, :name, presence: true

  has_attached_file :cover_photo, default_url: "default_album.png"
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :User

end
