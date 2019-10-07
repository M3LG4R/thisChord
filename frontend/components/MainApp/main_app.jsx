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

class MainApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="app-wrapper">
            <ServerIndex />
            <Switch>
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
        );
    }
}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(msp)(MainApp);