@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'api/photos/photo', photo: photo
    json.user_avatar asset_path(photo.user.avatar.url)
    json.user_fname photo.user.fname
    json.user_lname photo.user.lname
  end
end
