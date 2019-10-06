import React from 'react';
// import { Link } from 'react-router-dom';
import { ServerIcon } from './server_icon';


class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

    

    render() {
        const servers = Object.values(this.props.servers);
        const serverIcons = servers.map(server => <ServerIcon server={server} key={server.id} />);
        return (
            <ul>
              {serverIcons}
            </ul>

        );
    }
}

export default ServerIndex;