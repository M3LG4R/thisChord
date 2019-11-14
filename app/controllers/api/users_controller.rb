class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 402
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render :show
        end
    end

    def index
        @server = Server.includes(:members).find(params[:serverId])
        @users = @server.members
        if @users
            render :index
        end
    end



    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :image_url)
    end

end
