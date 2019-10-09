export const createChannel = (channel) => {
    return $.ajax({
        method: 'POST',
        url: `api/servers/${channel.serverId}`,
        data: { channel }
    })
}

export const fetchChannels = (serverId) => {
    return $.ajax({
        method: 'GET',
        url: `api/servers/${serverId}`,
        data: { serverId }
    })
}

export const fetchChannel = (data) => {
    return $.ajax({
        method: 'GET',
        url: `api/servers/${data.serverId}/${data.channelId}`,
    })
}

export const editChannel = data => {
    return $.ajax({
        method: 'PATCH',
        url: `api/${data.serverId}/${data.channelId}`,

    })
}

export const deleteChannel = data => {
    return $.ajax({
        method: 'DELETE',
        url: `api/${data.serverId}/${data.channelId}`,

    })
}