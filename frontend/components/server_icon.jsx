// import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const ServerIcon = (props) => {
    const { server } = props;
    return (
        <li>
            <div className="server-icon-wrap">
            <Link className="server-open" to={`/channels/${server.id}`}>{server.name.slice(0).toUpperCase()}</Link>
            <div className="server-icon-hover">{server.name}</div>
            </div>
        </li>
    );
}

export default ServerIcon;