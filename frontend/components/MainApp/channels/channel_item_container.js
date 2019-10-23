import React from 'react';
import { connect } from 'react-redux';
import ChannelItem from './channel_item';
import { closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';
import { editChannel, deleteChannel } from '../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
    // currentUser: state.entities.users[state.session.id],
    // servers: state.entities.servers,
    // currentServer: state.entities.servers[ownProps.match.params.serverId],
    // channels: state.entities.channels,
    // currentChannel: state.entities.channels[ownProps.match.params.channelId],
        // channels: state.entities.channels,
        // currentChannel: state.entities.channels[ownProps.channel.id],

    }


}

const mdp = (dispatch) => ({
    openModal: (modal) => openModal(modal),
    closeModal: () => closeModal(),
    editChannel: (data) => dispatch(editChannel(data)),
    deleteChannel: (data) => dispatch(deleteChannel(data)),
})

export default withRouter(connect(msp, mdp)(ChannelItem));