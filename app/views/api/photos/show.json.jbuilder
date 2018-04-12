json.partial! 'photo', photo: @photo
json.username @photo.user.username
json.user_email @photo.user.email
json.user_id @photo.user.id
json.user_avatar asset_path(@photo.user.avatar.url(:original))
json.user_fname @photo.user.fname
json.user_lname @photo.user.lname
