json.extract! user, :id, :username, :email, :image_url, :servers, :server_ids, :owned_servers

if user.image_url
    json.extract! user, :image_url
end