json.partial! 'comment', comment: @comment
json.username @comment.user.username
json.user_email @comment.user.email
json.user_id @comment.user.id
json.user_avatar asset_path(@comment.user.avatar.url(:original))
json.user_fname @comment.user.fname
json.user_lname @comment.user.lname
