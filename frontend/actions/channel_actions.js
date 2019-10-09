import * as APIUtil from '../util/channel_util'


export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS"
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'


export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const removeChannel = (channel) => ({
    type: REMOVE_CHANNEL,
    channel
})

export const fetchChannels = (serverId) => (dispatch) => {
    return APIUtil.fetchChannels(serverId).then(channels => dispatch(receiveChannels(channels)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const fetchChannel = (data) => (dispatch) => {
    return APIUtil.fetchChannels(data).then(channel => dispatch(receiveChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const deleteChannel = (data) => dispatch => {
    return APIUtil.destroyChannel(data).then(channel => dispatch(removeChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
}

export const editChannel = data => dispatch => {
    return APIUtil.editChannel(data).then(channel => dispatch(receiveChannel(channel)), err => dispatch(receiveErrors(err.responseJSON)));
}
