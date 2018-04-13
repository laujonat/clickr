class Tag < ApplicationRecord
  validates :body, presence: true
  validates :body, uniqueness: { scope: :photo_id}

  belongs_to :user
  belongs_to :photo
end
