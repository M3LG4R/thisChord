import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const sessionErrorsReducer = (state=[], action) => {
    debugger
    Object.freeze(state);
    let newState;
    let clearErrors = [];
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS: {
            newState = state.slice();
            newState = newState.concat(action.errors);
            return newState;

        }
        case RECEIVE_CURRENT_USER: {
            return clearErrors;
        }
        default: {
            return state;
        }
    }
}

export default sessionErrorsReducer;