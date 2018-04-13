@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'api/photos/photo', photo: photo
    json.user_avatar asset_path(photo.user.avatar.url(:original))
    json.user_fname photo.user.fname
    json.user_lname photo.user.lname
    json.username photo.user.username

    # json.tags do
    #   json.set! photo.tags.id do
    #     json.id photo.tag.id
    #     json.tag_body photo.tag.body
    #   end
    # end
  end
end
