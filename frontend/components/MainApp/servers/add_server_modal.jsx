import React from 'react';
import {connect} from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';

class AddServerModal extends React.Component {
    constructor(props) {
        super(props)
    }

    

    // handleJoinClick() {
    //     this.props.openModal("join server")
    // }

    render(){
       return (
           <div className="add-server-modal">
               <h1>OH, ANOTHER SERVER HUH?</h1>
               <div className="server-actions">
                   <p className="seperator">or</p>
                   <div className="create-server">
                        <h2>CREATE</h2>
                        <h3>Create a new server and invite your friends. It's free!</h3>
                       <img src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png"/>
                       <button onClick={() => this.props.openModal("create server")}>Create a Server</button>
                   </div>
                   <div className="join-server">
                        <h2>JOIN</h2>
                        <h3>Enter an invite and join your friend's server.</h3>
                       <img src="https://discordapp.com/assets/8fb52ec5260dfe6c5b93d211d3b6ecde.png"/>
                       <button onClick={() => this.props.openModal("join server")}>Join a Server</button>
                   </div>
               </div>
           </div>
       ) 
    }
}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
    
})

export default connect(msp,mdp)(AddServerModal);