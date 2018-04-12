class Api::AlbumsController < ApplicationController

  def index
    @albums = (
      if params[:user_id]
        Album.where(user_id: params[:user_id])
      else
        Album.all
      end
    )
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render :show
    else
      render json: ["Invalid album id"], status: 404
    end
  end

# TODO: REFACTOR TO TRANSACTIONS.
  def create
    # debugger
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    photo_ids = JSON.parse(params[:photo_ids])

    if photo_ids && !photo_ids.empty? && @album.save
      photo_ids.each do |id|
        AlbumPhoto.create(album_id: @album.id, photo_id: id)
      end
      render :show
    else
      render json: ["Creating album error"], status: 422
    end
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    if @album
      @album.destroy
      render :show
    else
      render json: ["Error deleting album."], status: 404
    end

  end

  private
  def album_params
    params.require(:album).permit(:user_id, :description, :name, :cover_photo)
  end


end
