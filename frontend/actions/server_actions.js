import * as APIUtil from '../util/server_util.js';
// import { RECEIVE_CURRENT_USER } from "./actions/session_actions"

export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const DESTROY_SERVER = 'DESTROY_SERVER';
export const UPDATE_SERVER = 'UPDATE_SERVER';



export const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
})

export const removeServer = (serverId) => ({
    type: DESTROY_SERVER,
    serverId
})

export const updateServer = (server) => ({
    type: UPDATE_SERVER,
    server
})

export const receiveErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
})

export const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
})



export const fetchServer = server => dispatch => (
    APIUtil.fetchServer(server).then(server => (
        dispatch(receiveServer(server))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchServers = currentUser => dispatch => (
    APIUtil.fetchServer(currentUser).then(servers => (
        dispatch(receiveServer(servers))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createServer = server => dispatch => {
    return APIUtil.createServer(server).then(
    server => dispatch(receiveServer(server))).fail( 
        err => dispatch(receiveErrors(err.responseJSON)))
};

export const destroyServer = serverId => dispatch => (
    APIUtil.deleteServer(serverId).then(serverId => (
        dispatch(removeServer(serverId))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);










