import React from 'react';
import ChannelItemContainer from './channel_item_container';
import { throws } from 'assert';


class ChannelIndex extends React.Component {
    constructor(props) {
       super(props);

       this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        this.props.fetchChannels(parseInt(this.props.match.params.serverId))
       
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            this.props.fetchChannels(parseInt(this.props.match.params.serverId));
        }
    }

    handleClick() {
        this.props.openModal('add channel')
    }

    

  

    render() {
        // match = { this.props.match }
        const serverId = parseInt(this.props.match.params.serverId)
        const channels = Object.values(this.props.channels)
        const channelItems = channels.map(channel => <ChannelItemContainer server={serverId} channel={channel} key={channel.id} />);
        // if (this.props.server) {
        const serverName = Object.values(this.props.servers).filter( server => server.id === serverId )
        const currentServerName = serverName.length ? serverName[0].name : null
        // }
        return (
        <>  
        <div className="channel-section">
            <h1 className="server-name">
                {currentServerName}
            </h1>
                    <h2 className="channel-index-header">TEXT CHANNELS 
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
            </section>
        </div>
        </>
        );
    }
}

export default ChannelIndex;