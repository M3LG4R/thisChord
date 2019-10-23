import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchServer } from '../../../actions/server_actions';
import ServerIndex from './server_index';
import { fetchServers } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';

const msp = (state) => {
    return {
    servers: state.entities.servers,
    currentUser: state.entities.users[state.session.id]
    }
    
}

const mdp = (dispatch) => ({
    openServer: (serverId) => dispatch(fetchServer(serverId)),
    createServer: (server) => dispatch(createServer(server)),
    fetchServers: () => dispatch(fetchServers()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
})

export default connect(msp,mdp)(ServerIndex);