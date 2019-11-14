export const fetchServer = (serverId) => {
    return $.ajax({
        method: 'GET',
        url: `api/server/${serverId}`,
    })
}

export const fetchServers = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/servers',
    })
    

}

// export const fetchUsers = (serverId) => {
//     return $.ajax({
//         method: 'GET',
//         url: 'api/users',
//         data: { serverId }
//     })
// }


export const createServer = (server) => {
    return $.ajax({
        method: 'POST',
        url: 'api/servers',
        data: { server }
    })
}

export const joinServer = (server) => {
    return $.ajax({
        method: 'POST',
        url: 'api/servers/join',
        data: { server }
    })
}

export const leaveServer = (serverId) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/servers/leave',
        data: { serverId }
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
        url: `api/servers/${server.id}`,
        data: { server }
    })
}
