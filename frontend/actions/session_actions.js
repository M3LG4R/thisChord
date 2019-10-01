import * as APIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const receiveCurrentUser = (user) => ({
    action: RECEIVE_CURRENT_USER,
    user,
});

export const removeCurrentUser = () => ({
    action: REMOVE_CURRENT_USER,
});

export const signup = (user) => dispatch => {
    return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const login = (user) => dispatch => {
    return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(res => dispatch(removeCurrentUser()));
}
