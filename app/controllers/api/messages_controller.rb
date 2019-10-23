class Api::MessagesController < ApplicationController


    def index
        @messages = Channel.find(params[:channelId]).messages
        if @messages
           render 'api/messages/index'
        else
            render json: ["No messages"]
        end 
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render 'api/messages/show'
        else
            render json: @message.errors.full_messages
        end
    end

    def destroy
       @message = Message.find(params[:id])
       if @message.destroy
        render 'api/messages/show'
       else
        render json: @messages.errors.full_messages, status: 422

    end

    # def update
    # end
    private
    def message_params
        params.require(:messages).permit(:body, :channel_id, :author_id)
    end
end
