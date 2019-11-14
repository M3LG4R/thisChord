class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "chat_channel"
  end

  def speak(data)
    message = Message.create({author_id: data['currentUserId'], channel_id: data['currentChannelId'], body: data['message']})
    socket = { id: message.id, body: message.body, created_at: message.created_at, channel_id: message.channel_id, author_id: message.author_id }
    ChatChannel.broadcast_to("chat_channel", socket)
  end

  # def load
  #   messages = Message.all.collect(&:body)
  #   socket = { messages: messages, type: 'messages' }
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
