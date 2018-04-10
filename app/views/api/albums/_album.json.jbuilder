json.extract! album, :id, :user_id, :description, :name, :created_at
json.cover_photo_url asset_path(album.cover_photo.url(:original))
