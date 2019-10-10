// import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ServerIcon = (props) => {
    const { server } = props;
    return (
        <li>
            <div className="server-icon-wrap">
            <Link className="server-open" to={`/channels/${server.id}/${server.channel_ids[0]}`}>{server.name.slice(0,1)}</Link>
            <div className="hover-wrap">
            <div className="server-icon-hover">{server.name}</div>
            </div>
            </div>
        </li>
    );
}

export default ServerIcon;