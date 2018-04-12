json.extract! album, :id, :user_id, :description, :name, :created_at
json.cover_photo_url asset_path(album.cover_img.url(:original))
json.photo_ids album.photos.pluck(:id)
