class Api::ChannelsController < ApplicationController
    before_action :ensure_logged_in
    

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages
        end
    end

    def show
        @channel = Channel.find(params[:id])
        render 'api/channels/show'
    end

    def index
        # @server = Server.includes(:channels).find(params[:serverId])
        @channels = Channel.includes(:messages).where(:server_id => params[:serverId])
        if @channels
            render 'api/channels/index'
        else
            render json: ["Not found"], status: 404
        end
    end

    def update
        @channel = Channel.find(params[:id])
        if @channel.update_attributes(channel_params)
            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages
        end
    end

    def destroy
       @channel = Channel.find(params[:id])
       if @channel.destroy
        render 'api/channels/show'
       else
        render json: @channel.errors.full_messages, status: 422
       end
    end

   

    private
    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end