class Photo < ApplicationRecord
  validates :user_id, :title, presence: true

  has_attached_file :photo_url, default_url: "missing.png"
  validates_attachment_content_type :photo_url, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :comment_id,
  class_name: :Comment

  has_many :album_photos, dependent: :destroy, inverse_of: :photo

  has_many :albums,
  through: :album_photos,
  source: :album


end
