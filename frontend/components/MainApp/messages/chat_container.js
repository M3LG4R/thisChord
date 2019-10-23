import Chat from './chat'
import { fetchMessages } from '../../../actions/message_actions'
import { connect } from 'react-redux';

const msp = (state) => ({
    messages: state.entities.messages,
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels

    
})

const mdp = (dispatch) => ({
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    fetchMessage: (messageId) => dispatch(fetchMessage(messageId))
})


export default connect(msp,mdp)(Chat);

