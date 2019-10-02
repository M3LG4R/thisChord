import { Link } from "react-router-dom";
import React from 'react';
class LandingPage extends React.Component {
    constructor(props){
        super(props);

    }

    renderAppbutton() {
        if (this.props.currentUser) {
            return (
                <Link className="app-button" to="/channels">Open</Link>
            );
        } else {
            return (
                <Link className="app=button" to="/login">Login</Link>
            );
        }
    }

    renderTempLogout() {
        if (this.props.currentUser) {
            return (
                <button onClick={this.props.logout}>Logout</button>
            );
        }
    }

    render() {
        return (
            <>
            {this.renderAppbutton()}
            {this.renderTempLogout()}
            </>
        );
        
    }
}

export default LandingPage;