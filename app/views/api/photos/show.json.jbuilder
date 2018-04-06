json.username @photo.user.username
json.owner_email @photo.user.email
json.user_id @photo.user.id
json.user_img @photo.user.avatar
json.partial! 'photo', photo: @photo
