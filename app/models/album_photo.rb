class AlbumPhoto < ApplicationRecord
  belongs_to :album
  belongs_to :photo
end
