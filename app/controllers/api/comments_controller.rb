class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
      render :show
    else
      render json: ["Invalid comment id"], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: ["Upload comment error"], status: 422
    end
  end

  def index
    @comments = (
      if params[:photo_id]
        Comment.where(photo_id: params[:photo_id])
      else
        Comment.all
      end
    )
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment
      @comment.destroy
      render :show
    else
      render json: ["Invalid comment id"], status: 404 
    end

  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment
      @comment.update(comment_params)
      render :show
    else
      render json: ["Invalid comment id"], status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :photo_id)
  end

end
