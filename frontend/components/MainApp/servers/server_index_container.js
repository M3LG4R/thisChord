import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchServer } from '../../../actions/server_actions';
import ServerIndex from './server_index';
import { fetchServers } from '../../../actions/server_actions';

const msp = (state, ownProps) => ({
    servers: state.entities.servers,
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    openServer: (serverId) => dispatch(fetchServer(serverId)),
    createServer: (server) => dispatch(createServer(server)),
    fetchServers: () => dispatch(fetchServers())
})

export default connect(msp,mdp)(ServerIndex);