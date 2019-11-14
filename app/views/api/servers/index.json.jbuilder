@servers.each do |server|
    json.servers do
        json.set! server.id do
            json.partial! 'api/servers/server', server: server
        end
    end

    json.users do
        server.members.each do |member|
            json.set! member.id do
                json.partial! 'api/users/user', user: member
            end
        end
    end

    json.channels do
        server.channels.each do |channel|
            json.set! channel.id do
                json.partial! 'api/channels/channel', channel: channel
            end
        end
    end

end
