class Album < ApplicationRecord
  validates :user_id, :name, presence: true

  has_attached_file :cover_img, default_url: "default_album.png"
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\Z/

  belongs_to :user

  has_many :photos,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Photo

end
