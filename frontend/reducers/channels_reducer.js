import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_CHANNELS: {
            return merge({}, action.channels);
        }
        case RECEIVE_CHANNEL: {
           return merge({}, state, {[action.channel.id]: action.channel});
           
        }
        case REMOVE_CHANNEL: {
            newState = merge({}, state);
            delete newState[action.channel.id];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default channelsReducer;