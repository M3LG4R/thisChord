import React from 'react';
import {connect} from 'react-redux';

class CurrentUserBar extends React.Component {
    constructor(props) {
        super(props)
    
    }


    render() {
        const {currentUser} = this.props;
        const imgSrc = currentUser.image_url || "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"
        return (
            <div className="user-bar">
                <div className="currentuser-avatar-wrap" aria-hidden="true">
                    <div role="img" aria-hidden="true" style={{ width: '32', height: '32' }}>
                        <svg width="40" height="32" viewBox="0 0 40 32" aria-hidden="true">
                            <mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                                <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                            </mask>
                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                                <img src={imgSrc} alt=" " className="avatar-img" aria-hidden="true"></img>
                            </foreignObject>
                            < rect width="10" height="10" x="22" y="22" fill="#43b581" mask="url(#svg-mask-avatar-default)" className="online-circle" ></rect >
                        </svg>
                    </div>
                </div>
                <div className="user-info">
                    <span>{currentUser.username}</span>
                </div>
            </div>
        )
    }

}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

// const mdp = (dispatch) => ({

// })

export default connect(msp)(CurrentUserBar);