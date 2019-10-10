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

class MainApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
        <div className="app-wrapper">
            <Modal />
            <Route path="/channels/" component={ServerIndex}/>
            {/* default page container here */}
            <Switch>
                <Route path="/channels/:serverId/:channelId" component={ChannelIndexContainer}/>
            {/* <section className="index-wrapper"> */}
                {/* <Route path="/channels/">
                <ServerIndex />
                </Route> */}
            {/* </section> */}
            {/* <section className="channel-idx-wrapper"> */}
                {/* <Route path="channels/:serverId">
                <ChannelIndex />
                </Route> */}
            {/* </section> */}
            {/* <section className="messages-wrapper"> */}
                {/* <Route path="channels/:serverId/:channelId">
                    <ChannelMessages/>
                </Route> */}
            {/* </section> */}
            {/* <section className="servermembership-wrapper"> */}
                {/* <Route path="channels/:serverId">
                <ServerMembers/>
                </Route> */}
            {/* </section> */}
            </ Switch>
        </div>
        </>
        );
    }
}

export default MainApp;
