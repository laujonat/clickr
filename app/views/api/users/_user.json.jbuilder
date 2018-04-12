json.extract! user, :id, :email, :username, :fname, :lname, :created_at
json.user_profile_img asset_path(user.avatar.url(:original))
json.profile_cover_photo asset_path(user.cover_photo.url(:original))
