json.extract! server, :id, :name, :invite_code, :owner_id, :members

if server.image_url
    json.extract! server, :image_url
end