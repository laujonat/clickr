class Photo < ApplicationRecord
  validates :user_id, :title, presence: true

  has_attached_file :photo_url, default_url: "missing.png"
  validates_attachment_content_type :photo_url, content_type: /\Aimage\/.*\Z/

  belongs_to :user, optional: true
end