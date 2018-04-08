json.partial! 'photo', photo: @photo
json.username @photo.user.username
json.user_email @photo.user.email
json.user_id @photo.user.id
json.user_avatar @photo.user.avatar
json.photo_artist_fname @photo.user.fname
json.photo_artist_lname @photo.user.lname
