class OnlineChannel < ApplicationCable::Channel
  def subscribed
    stream_for "online_channel"
    user = User.find(params[:id])
    user.online = true
    user.save
    payload = {id: user.id, username: user.username, image_url: user.image_url, online: true }
    OnlineChannel.broadcast_to("online_channel", {type: "LOGIN", user: payload})
  end

  def unsubscribed
   user = User.find(params[:id])
   user.online = false
   user.save
   payload = {id: user.id, username: user.username, image_url: user.image_url, online: false }
   OnlineChannel.broadcast_to("online_channel", {type: "LOGOUT", user: payload})
  end
end
