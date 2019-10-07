import { RECEIVE_SERVER_ERRORS, CLEAR_SERVER_ERRORS } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


const serverErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    let clearErrors = [];
    switch (action.type) {
        case RECEIVE_SERVER_ERRORS: {
            newState = state.slice();
            newState = newState.concat(action.errors);
            return newState;

        }
        case RECEIVE_CURRENT_USER: {
            return clearErrors;
        }
        case CLEAR_SERVER_ERRORS: {
            return clearErrors;
        }
        default: {
            return state;
        }
    }
}

export default serverErrorsReducer;