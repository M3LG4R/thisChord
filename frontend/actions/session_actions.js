import * as APIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
    errors: []
})


// export const signup = (user) => dispatch => {
//     return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))).fail(err => dispatch(receiveErrors(err.responseJSON)));
// }

// export const login = (user) => dispatch => {
//     return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))).fail(err => dispatch(receiveErrors(err.responseJSON)));
// }

// export const logout = () => dispatch => {
//     return APIUtil.logout().then(res => dispatch(removeCurrentUser())).fail(err => dispatch(receiveErrors(err.responseJSON)));
// }

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(removeCurrentUser())
    ))
);
