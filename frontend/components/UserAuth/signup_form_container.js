import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import {receiveErrors} from '../../actions/session_actions'
import { clearSessionErrors } from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Register',
        navLink: <Link className="already-acct" to="/login">Already have an account?</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);