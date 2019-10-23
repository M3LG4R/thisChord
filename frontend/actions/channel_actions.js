import * as APIUtil from '../util/channel_util'


export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';


export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const removeChannel = (channel) => {
    return {
    type: REMOVE_CHANNEL,
    channel
    }
};

export const clearErrors = () => ({
    type: CLEAR_CHANNEL_ERRORS
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const createChannel = (channel) => (dispatch) => {
    return APIUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchChannels = (serverId) => (dispatch) => {
    return APIUtil.fetchChannels(serverId).then(channels => dispatch(receiveChannels(channels)), err => dispatch(receiveErrors(err.responseJSON)));
};

export const fetchChannel = (channelId) => (dispatch) => {
    return APIUtil.fetchChannel(channelId).then(channel => dispatch(receiveChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
};

// export const deleteChannel = channelId => dispatch => (
//     APIUtil.deleteChannel(channelId).then(channel => (
//         dispatch(removeChannel(channel))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))
// );

export const deleteChannel = channelId => dispatch => (
    APIUtil.deleteChannel(channelId).then(channel => (
        dispatch(removeChannel(channel))
    ))
);

// export const deleteChannel = (channelId) => dispatch => {
//     return APIUtil.deleteChannel(channelId).then(channel => dispatch(removeChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
// };

export const editChannel = channel => dispatch => {
    return APIUtil.editChannel(channel).then(channel => dispatch(receiveChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
};
