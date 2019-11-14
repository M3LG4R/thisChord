// import { connect } from 'react-redux';
import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const ServerIcon = (props) => {
    const { server } = props;
    return (
        <li>
            <div className="server-icon-wrap">
                <div className={`selected-icon-wrap ${props.location.pathname.split("/")[2] == server.id ? "active" : ""}`}>
                    <span className="selected-icon"></span>
            </div>
            <NavLink className={`server-open ${props.location.pathname.split("/")[2] == server.id ? "active" : ""}`}  activeClassName="selected" to={`/channels/${server.id}/${server.channel_ids[0]}`}>{server.name.slice(0,1)}</NavLink>
            <div className="hover-wrap">
            <div className="server-icon-hover">{server.name}</div>
            </div>
            </div>
        </li>
    );
}



export default withRouter(ServerIcon);