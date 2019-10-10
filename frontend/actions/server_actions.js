import * as APIUtil from '../util/server_util.js';
// import { RECEIVE_CURRENT_USER } from "./actions/session_actions"

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const DESTROY_SERVER = 'DESTROY_SERVER';
export const UPDATE_SERVER = 'UPDATE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS'
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS'



export const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
})

export const removeServer = (serverId) => ({
    type: DESTROY_SERVER,
    serverId
})

export const receiveErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
})

export const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
})

export const clearErrors = () => ({
    type: CLEAR_SERVER_ERRORS  
})



export const fetchServer = server => dispatch => (
    APIUtil.fetchServer(server).then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchServers = () => dispatch => (
    APIUtil.fetchServers().then(servers => (
        dispatch(receiveServers(servers))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const joinServer = server => dispatch => (
    APIUtil.joinServer(server).then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
// export const createServer = server => dispatch => {
//     return APIUtil.createServer(server).then(
//     server => dispatch(receiveServer(server))).fail( 
//         err => dispatch(receiveErrors(err.responseJSON)))
// };

export const destroyServer = serverId => dispatch => (
    APIUtil.deleteServer(serverId).then(serverId => (
        dispatch(removeServer(serverId))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createServer = server => dispatch => (
    APIUtil.createServer(server).then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);










