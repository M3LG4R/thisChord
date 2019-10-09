import React from 'react';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../../../actions/modal_actions';
import { createServer } from '../../../actions/server_actions';

class CreateServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state).then(() => this.props.closeModal())
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <>

            <form className="create-form">
                <h4>CREATE YOUR SERVER</h4>
                <h5>By creating a server, you will have access to free voice and text chat to use amongst your friends</h5>
                <div className="form-input">
                    <div className="left-input">
                        <label>SERVER NAME</label>
                        <input value={this.state.name} onChange={this.handleChange("name")} placeholder="Enter a server name" type="text"/>
                        <label className="region" htmlFor="server-region">SERVER REGION</label>
                        <div className="region-box">
                            <img src="https://discordapp.com/assets/e6d6b255259ac878d00819a9555072ad.png"/>
                            <span>US East</span>
                            <button type="button">Change</button>
                        </div>
                    </div>
                    <div className="image-upload">
                        <span>
                        <input type="text" value={this.state.name[0]}/>
                        </span>
                    </div>
                </div>
                <div className="bottom-nav">
                    <button onClick={() => this.props.openModal("add server")} className="cancel-create" type="button">
                        BACK
                    </button>
                    <button onClick={this.handleSubmit} className="createbtn" type="submit">
                        <div>Create</div>
                    </button>
                </div>
            </form>
            
            </>
        );
    }
}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createServer: (server) => dispatch(createServer(server)),
})

export default connect(msp,mdp)(CreateServerForm);