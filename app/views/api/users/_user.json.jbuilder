json.extract! user, :id, :email, :username, :fname, :lname
json.user_profile_img asset_path(user.avatar.url(:original))
