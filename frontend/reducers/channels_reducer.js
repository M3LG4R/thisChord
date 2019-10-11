import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

const channelsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_CHANNELS: {
            return action.channels;
        }
        case RECEIVE_CHANNEL: {
            newState = merge(newState, state, action.channel)
            return newState;
        }
        case REMOVE_CHANNEL: {
            const channel = action.channel
            newState = merge(newState, state)
            delete newState.channels[channel.id];
        }
        default: {
            return state;
        }
    }
}

export default channelsReducer;