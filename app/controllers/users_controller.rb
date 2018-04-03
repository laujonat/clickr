class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def show
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to user_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    self.params.require(:user).permit(:email, :username, :fname, :lname, :password)
  end

end
