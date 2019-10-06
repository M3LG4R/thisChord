class Api::ServersController < ApplicationController
    before_action :ensure_logged_in

    
    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save
            current_user.servers << @server
            ##ADD DEFAULT CHANNEL WHEN CHANNELS ARE IMPLEMENTED
            render json: "api/servers/show"
        else
            render json: @server.errors.full_messages
        end

    end

    def show
        @server = Server.includes(:members).find(params[:id])
        if @server
            render json: "api/servers/show"
            ##INCLUDE CHANNEL/MEMBER ASSOCIATIONS 
        else
            render json: ["Server Not Found"], status: 404
        end
    end


    def index
        @user = current_user
        @servers = @user.servers
        if @servers
            render json: "api/users/show"
        else
            render json: ["Invalid User"], status: 401
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server.update_attributes(server_params)
            render json: "api/servers/show"
        else
            render json: @server.errors.full_messages
        end

    end

    def destroy
        @user = current_user
        @server = @user.servers.find(params[:id])
        if @server
        @server.destroy
        render json: "api/users/show"
        else
            render json: ["Not your Server!"], status: 401
        end
    end

    def join
        @server = Server.find_by(params[:invite_code])
        if @server
            return render json: ["Already a server member!"] if @user 
            @user = current_user
            @user.servers << @server 
        else
            render json: ["Invalid invite code"], status: 404
        end
    end

    def leave
        @user = current_user
        @server = @user.servers.find(params[:id])
        if @server
            @user.servers.delete(@server.id)
            render json: "api/users/show"
        else
            render json: ["Not a member!"]
        end
            
    end

    
    private
    def server_params
        params.require(:server).permit(:name, :image_url, :invite_code)
    end

end
