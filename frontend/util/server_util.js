export const fetchServer = (serverId) => {
    return $.ajax({
        method: 'GET',
        url: `api/server`,
        data: { serverId }
    })
}

export const fetchServers = (user) => {
    return $.ajax({
        method: 'GET',
        url: 'api/servers',
        data: { user }
    })
    

} 

export const createServer = (server) => {
    return $.ajax({
        method: 'POST',
        url: 'api/servers',
        data: { server }
    })
}

export const deleteServer = (serverId) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/server',
        data: { serverId }
    })
}

export const editServer = (server) => {
    return $.ajax({
        method: 'PATCH',
        url: 'api/server',
        data: { server }
    })
}
