class Api::PhotosController < ApplicationController
  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render :show
    else
      render json: ["Invalid photo id"], status: 404
    end

  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: ["Upload photo error"], status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render :show
    else
      render json: ["Invalid photo id"], status: 404
    end
  end

  def index
    @photos = (
      if params[:user_id]
        Photo.where(user_id: params[:user_id])

      else
        Photo.all
      end
    )
  end

  def update
    @photo = Photo.find_by(id: params[:id])

    if @photo
      @photo.update(photo_params)
      render :show
    else
      render json: ["Invalid photo id"], status: 404
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :photo_url, :user_id)
  end

end
