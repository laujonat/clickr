json.extract! comment, :id, :body, :user_id, :photo_id, :created_at
json.photo_url asset_path(comment.user.avatar.url(:original))
