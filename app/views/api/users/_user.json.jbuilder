json.extract! user, :id, :email, :username, :fname, :lname, :created_at
json.user_profile_img asset_path(user.avatar.url(:original))
