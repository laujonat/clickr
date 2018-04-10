json.extract! photo, :id, :title, :description, :user_id
json.photo_url asset_path(photo.photo_url.url(:original))
json.user_id photo.user.id
