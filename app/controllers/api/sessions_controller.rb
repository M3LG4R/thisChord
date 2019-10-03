class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(email:params[:user][:email])
        if !@user
            render json: [" - Email does not exist."], status: 401
        elsif
            @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
            if @user
                login(@user)
                render "api/users/show"
            else
                render json: [" - Password does not match."], status: 401
            end
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["Must be logged in to do that!"], status: 404
        end
    end



end
