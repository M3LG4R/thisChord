import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { clearErrors } from '../../../actions/channel_actions'
import { createChannel } from '../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import AddChannelForm from './add_channel_form';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    servers: state.entities.servers,
    channels: state.entities.channels,

    // currentServer: state.entities.servers[parseInt(ownProps.match.params.serverId)]
})

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
})

export default withRouter(connect(msp, mdp)(AddChannelForm));
