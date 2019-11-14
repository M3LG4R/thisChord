import Chat from './chat'
import { fetchMessages, fetchMessage, receiveMessage } from '../../../actions/message_actions'
import {fetchUsers} from '../../../actions/channel_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/message_actions'

const msp = (state, ownProps) => {
return {
        messages: state.entities.messages,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        channels: state.entities.channels,
        currentChannel: state.entities.channels[ownProps.match.params.channelId],
        currentServer: Object.values(state.entities.servers).length ? state.entities.servers[ownProps.match.params.serverId] : null
    }
}

const mdp = (dispatch) => ({
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    fetchMessage: (messageId) => dispatch(fetchMessage(messageId)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    fetchUsers: (serverId) => dispatch(fetchUsers(serverId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})


export default withRouter(connect(msp,mdp)(Chat));

