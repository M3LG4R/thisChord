import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
const nullUser = {id: null};
const sessionsReducer = (state=nullUser, action) => {
    debugger
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER: {
            return {id: action.user.id}
        }
        case REMOVE_CURRENT_USER: {
            return nullUser;
        }
        default: {
            return state;
        }
    }
}

export default sessionsReducer;