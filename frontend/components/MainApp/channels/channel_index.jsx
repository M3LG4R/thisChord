import React from 'react';
import ChannelItemContainer from './channel_item_container';
import { withRouter } from 'react-router-dom';
import CurrentUserBar from '../servers/current_user_bar';



class ChannelIndex extends React.Component {
    constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        this.props.fetchChannels(parseInt(this.props.match.params.serverId));
        // this.props.fetchUsers(parseInt(this.props.match.params.serverId));
       
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
            this.props.fetchChannels(parseInt(this.props.match.params.serverId));
            // this.props.fetchUsers(parseInt(this.props.match.params.serverId));
        }
    }

    handleClick() {
        this.props.openModal('add channel');
    }

    

  

    render() {
        // match = { this.props.match }
        // const serverId = parseInt(this.props.match.params.serverId)
        // const channels = Object.values(this.props.channels)
        
        let channelItems;
        if (Object.values(parseInt(this.props.match.params.serverId)).length) {
        }
         if (Object.values(this.props.servers).length) {
            channelItems = Object.values(this.props.channels).map( channel => <ChannelItemContainer server={this.props.currentServer} serverId={parseInt(this.props.match.params.serverId)} channel={channel} key={Math.random()} />)
         }

        const serverName = this.props.currentServer ? this.props.currentServer.name : "" 
        
         
        // if (this.props.server) {
        // const serverName = Object.values(this.props.servers).filter( server => server.id === serverId )
        // const currentServerName = serverName.length ? serverName[0].name : null
        // }

        return (
        <>  
        <div className="channel-section">
            <h1 className="server-name">
                {serverName}
            </h1>
                <h2 className="channel-index-header">
                <span>TEXT CHANNELS </span>
                <div className="plus-hover-wrap"> 
                    <svg onClick={this.handleClick}  className="plus-icon" aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">
                        <polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
                        </polygon>
                    </svg>
                <div className="plus-icon-hover">Create Channel</div> 
                </div>
            </h2>
            <section className="channel-index">
                <ul className="channelList">
                    {channelItems}
                </ul>
            <CurrentUserBar/>
            </section>
        </div>
        </>
        );
    }
}

export default ChannelIndex;