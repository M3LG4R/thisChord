import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchServer } from '../actions/server_actions';

const msp = ({servers}, ownProps) => ({
    servers
})

const mdp = (dispatch) => ({
    openServer: (server) => dispatch(fetchServer(server)),
    createServer: (server) => dispatch(c)
})

export default connect(msp,mdp)(ServerIndex);