import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL, RECEIVE_CHANNEL_ERRORS } from '../actions/channel_actions';


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
    }
}

export default channelsReducer;