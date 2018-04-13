class Tag < ApplicationRecord
  validates :body, presence: true

  belongs_to :user, optional: true
  belongs_to :photo, optional: true
end
