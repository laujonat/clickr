@albums.each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album: album
    json.user_fname album.user.fname
    json.user_lname album.user.lname
    json.username album.user.username
    json.user_avatar asset_path(album.user.avatar.url(:original))
  end
end
