class Api::TagsController < ApplicationController
  def index
    @tags = (
      if params[:photo_id]
        Tag.where(photo_id: params[:photo_id])
      else
        Tag.all
      end
    )
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id

    if @tag.save
      render :show
    else
      render json: ["Cannot create tag."], status: 422
    end
  end

  def destroy
    @tag = current_user.tags.find_by(id: params[:id])
    if @tag
      @tag.destroy
      render :show
    else
      render json: ["Invalid tag id"], status: 404
    end
  end

  def show
    @tag = Tag.find_by(id: params[:id])
    if @tag
      render :show
    else
      render json: ["Invalid tag id"], status: 404
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:body, :user_id, :photo_id)
  end
end
