import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_USERS } from '../actions/channel_actions';
import { merge } from 'lodash';
import { RECEIVE_SERVERS, RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_USER } from '../actions/message_actions';


const usersReducer = (state={}, action) => {
    let newState = {};
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER: {
            return merge({}, state, {[action.user.id]: action.user})
        }
        case REMOVE_CURRENT_USER: {
            return newState;
        }
        case RECEIVE_USERS: {
            return merge({}, state, action.users);
        }
        case RECEIVE_SERVERS: {
            return merge({}, state, action.users );
        }
        case RECEIVE_SERVER: {
            return merge({}, state, action.users )
        }
        case RECEIVE_USER: {
            return merge({}, state, {[action.user.id]: action.user})
        }
        default: {
            return state;
        }
    }
}

export default usersReducer;