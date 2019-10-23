export const fetchMessages = (channelId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/messages',
        data: { channelId }
    })
}

export const fetchMessage = (messageId) => {
    return $.ajax({
        method: 'GET',
        url: `api/messages/${messageId}`
    })
}

export const editMessage = (message) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/messages/${message.id}/edit`,
        data: { message }
    
    })
}

export const deleteMessage = (messageId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/messages/${messageId}`
    })
}