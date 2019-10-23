import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

export const messagesReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState;
    switch(action.type) {
        case RECEIVE_MESSAGES: {
            return merge({}, action.messages);
        }
        case RECEIVE_MESSAGE: {
           newState = merge({}, state, {[action.message.id]:action.message}) 
           return newState;
        }
        case REMOVE_MESSAGE: {
            newState = merge({}, state);
            delete newstate[action.message.id];
            return newState;
        }
        default: {
            return state;
        }
    }
}