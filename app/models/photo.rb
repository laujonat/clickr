class Photo < ApplicationRecord
  validates :user_id, :title, :photo_url, presence: true
  # validates :photo_url, attachment_presence: true

  has_attached_file :photo_url, default_url: "missing.png"
  validates_attachment_content_type :photo_url, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Comment

  has_many :album_photos, dependent: :destroy, inverse_of: :photo

  has_many :albums,
  through: :album_photos,
  source: :album

  has_many :tags,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tag


end
