class Api::ServersController < ApplicationController
    before_action :ensure_logged_in

    
    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save
            current_user.servers << @server
            @server.channels << Channel.new({name: "general"})
            @server.save!
            ##ADD DEFAULT CHANNEL WHEN CHANNELS ARE IMPLEMENTED
            render 'api/servers/show'
        else
            render json: @server.errors.full_messages
        end

    end

    def show
        @server = Server.includes(:members, :channels).find(params[:id])
        if @server
            render 'api/servers/show'
            ##INCLUDE CHANNEL/MEMBER ASSOCIATIONS 
        else
            render json: ["Server Not Found"], status: 404
        end
    end


    def index
       
        @servers = @current_user.servers
        if @servers
            render 'api/servers/index'
        else
            render json: ["Invalid User"], status: 401
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server.update_attributes(server_params)
            render 'api/servers/show'
        else
            render json: @server.errors.full_messages
        end

    end

    def destroy
        @server = @current_user.servers.find(params[:id])
        if @server
        @server.destroy
        render 'api/servers/show'
        else
            render json: ["Not your Server!"], status: 401
        end
    end

    def join
        @server = Server.find_by(server_params)
        if @server
            @user = current_user
            return render json: ["Already a server member!"], status: 401 if @user.servers.include?(@server)
            @user.servers << @server
            @user.save!
            render 'api/servers/show'
        else
            render json: ["The invite is invalid or has expired"], status: 404
        end
    end

    def leave
        @user = current_user
        @server = @user.servers.find(params[:id])
        if @server
            @user.servers.delete(@server.id)
            render "api/users/show"
        else
            render json: ["Not a member!"]
        end
            
    end

    
    private
    def server_params
        params.require(:server).permit(:name, :image_url, :invite_code)
    end

end
