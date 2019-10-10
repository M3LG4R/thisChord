import { RECEIVE_CHANNEL_ERRORS, CLEAR_CHANNEL_ERRORS } from '../actions/channel_actions';

const channelErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    let newState;
    let clearErrors = [];
    switch(action.type) {
        case RECEIVE_CHANNEL_ERRORS: {
            newState = state.slice();
            newState = newState.concat(action.errors);
            return newState;
        }
        case CLEAR_CHANNEL_ERRORS: {
            return clearErrors;
        }
        default: {
            return state;
        }
    }
}

export default channelErrorsReducer;