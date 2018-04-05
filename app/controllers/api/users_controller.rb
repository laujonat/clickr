class Api::UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def user_params
    self.params.require(:user).permit(:email, :username, :fname, :lname, :password)
  end

end
