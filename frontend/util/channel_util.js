export const createChannel = (channel) => {
    return $.ajax({
        method: 'POST',
        url: `api/channels/`,
        data: { channel }
    })
}

export const fetchChannels = (serverId) => {
    return $.ajax({
        method: 'GET',
        url: `api/channels`,
        data: { serverId }
    })
}

export const fetchUsers = (serverId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users`,
        data: { serverId },

    })
}

export const fetchChannel = (channelId) => {
    return $.ajax({
        method: 'GET',
        url: `api//channels/${channelId}`,
    })
}

export const editChannel = channelId => {
    return $.ajax({
        method: 'PATCH',
        url: `api//channels/${channelId}/edit`,

    })
}

export const deleteChannel = channelId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/channels/${channelId}`,

    })
}