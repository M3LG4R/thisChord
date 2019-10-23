import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER, RECEIVE_SERVERS } from "../actions/server_actions"
import { merge } from 'lodash';

export const serversReducer = (state={}, action) => {
    let newState = {}
    Object.freeze(state) 
    switch(action.type) {
        // case RECEIVE_CURRENT_USER: {

        //     const { servers } = action.user;
        //     servers.forEach(server => newState[server.id] = server)
        //     return newState;
        // }
        case REMOVE_CURRENT_USER: {
            return newState;
        }
        case RECEIVE_SERVERS: {
            return merge({}, state, action.servers);
        }
        case RECEIVE_SERVER: {
            return merge({}, state, {[action.server.id]:action.server});
        }
        default: {
            return state;
        }
    }
}

// function formatState(servers) {
//     debugger
//     const serverState = {}
//     servers.ForEach(server => serverState[server.id] = server)
//     return serverState;


// }

