json.extract! user, :id, :email, :username, :fname, :lname
json.image_url asset_path(user.avatar.url)
