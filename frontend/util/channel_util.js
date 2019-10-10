export const createChannel = (channel) => {
    return $.ajax({
        method: 'POST',
        url: `api/servers/${channel.serverId}/channels`,
        data: { channel }
    })
}

export const fetchChannels = (serverId) => {
    return $.ajax({
        method: 'GET',
        url: `api/servers/${serverId}/channels`,
        // data: { serverId }
    })
}

export const fetchChannel = (data) => {
    return $.ajax({
        method: 'GET',
        url: `api/servers/${data.serverId}/channels/${data.id}`,
    })
}

export const editChannel = data => {
    return $.ajax({
        method: 'PATCH',
        url: `api/servers/${data.serverId}/channels/${data.id}/edit`,

    })
}

export const deleteChannel = data => {
    return $.ajax({
        method: 'DELETE',
        url: `api/servers/${data.serverId}/channels/${data.channel.id}`,

    })
}