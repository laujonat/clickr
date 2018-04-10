@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'api/comments/comment', comment: comment
    json.user_fname comment.user.fname
    json.user_lname comment.user.lname
    json.username comment.user.username
    json.user_avatar asset_path(comment.user.avatar.url(:original))
  end
end
