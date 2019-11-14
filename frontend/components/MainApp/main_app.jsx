import React from 'react'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';
import ServerIndex from "./servers/server_index_container";
import { connect } from 'react-redux';
import Modal from '../modal';
import ChannelIndexContainer from '../MainApp/channels/channel_index_container';
import ChatContainer from '../MainApp/messages/chat_container';
import { receiveUser } from '../../actions/message_actions';
import { fetchServers } from '../../actions/server_actions';
import { Loading } from './loading';

class MainApp extends React.Component {
    constructor(props) {
        super(props)
        this.receiveUser = this.props.receiveUser.bind(this)
        this.hideLoader = this.hideLoader.bind(this)
    }

    componentDidMount() {
     App.onlinePresence = App.cable.subscriptions.create(
            { channel: "OnlineChannel", id: this.props.currentUserId },
            {
                received: data => {
                   switch(data.type) {
                       case "LOGIN": {
                        this.receiveUser(data.user)
                        break;
                       }
                       case "LOGOUT": {
                          this.receiveUser(data.user)
                           break;
                       }
                   }
                }
            }
        );
        this.props.fetchServers();
        setTimeout(this.hideLoader, 1500);
    }

    hideLoader() {
        document.querySelector(".loading-screen").classList.add("hidden")
    }

  

    
    render() {
        return (
            <>
        <Loading/>
        <div className="app-wrapper">
            <Modal />
            <Route path="/channels/" >
                <ServerIndex />
            </Route>
            <Route path="/channels/:serverId/">
                <ChannelIndexContainer/>
            </Route>
            <Route path="/channels/:serverId/:channelId" >
                <ChatContainer />
            </Route>

            {/* <Switch>
            </ Switch> */}
        </div>
        </>
        );
    }
}

const msp = (state) => ({
    // users: state.entities.users,
    // servers: state.entities.servers,
    currentUserId: state.session.id

})

const mdp = (dispatch) => ({
    receiveUser: (user) => dispatch(receiveUser(user)),
    fetchServers: () => dispatch(fetchServers())
})

export default withRouter(connect(msp, mdp)(MainApp));
