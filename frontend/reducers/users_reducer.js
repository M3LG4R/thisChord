import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


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
        default: {
            return state;
        }
    }
}

export default usersReducer;