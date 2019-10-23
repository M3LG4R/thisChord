import React from 'react';
import { connect } from 'react-redux';
import ChannelIndex from './channel_index'
import { closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchChannels, createChannel } from '../../../actions/channel_actions';
import { fetchServers } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
   return {
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels,
    servers: state.entities.servers,
    currentServer: state.entities.servers[ownProps.match.params.serverId]
    }

}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => closeModal(),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    fetchServers: () => dispatch(fetchServers()),

})

export default withRouter(connect(msp,mdp)(ChannelIndex));