import * as APIUtil from '../util/message_util';
import { REMOVE_CHANNEL } from './channel_actions';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
     
})

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const removeMessage = (message) => ({
    type: REMOVE_MESSAGE,
    message
})


export const fetchMessages = (channelId) => dispatch => (
    APIUtil.fetchMessages(channelId).then(messages => (
        dispatch(receiveMessages(messages))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const fetchMessage = (messageId) => dispatch => (
    APIUtil.fetchMessage(messageId).then(message => (
        dispatch(receiveMessage(message))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);



