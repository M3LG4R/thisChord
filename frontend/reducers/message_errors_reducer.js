import { RECEIVE_MESSAGE_ERRORS, CLEAR_MESSAGE_ERRORS } from '../actions/message_actions';

const messageErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    let clearErrors = [];
    switch (action.type) {
        case RECEIVE_MESSAGE_ERRORS: {
            newState = state.slice();
            newState = newState.concat(action.errors);
            return newState;
        }
        case CLEAR_MESSAGE_ERRORS: {
            return clearErrors;
        }
        default: {
            return state;
        }
    }
}

export default messageErrorsReducer;