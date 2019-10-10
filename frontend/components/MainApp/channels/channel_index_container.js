import React from 'react';
import { connect } from 'react-redux';
import ChannelIndex from './channel_index'
import { closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchChannels, createChannel } from '../../../actions/channel_actions';
import { fetchServers } from '../../../actions/server_actions';

const msp = (state, ownProps) => {
   return {
    currentUser: state.entities.users[state.session.id],
    servers: state.entities.servers,
    currentServer: state.entities.servers[ownProps.match.params.serverId],
    channels: state.entities.channels,
    currentChannel: state.entities.channels[ownProps.match.params.channelId]
    }

}

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => closeModal(),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    fetchServers: () => dispatch(fetchServers()),

})

export default connect(msp,mdp)(ChannelIndex)