import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { clearErrors } from '../../../actions/channel_actions'
import { createChannel } from '../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { throws } from 'assert';

class AddChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            server_id: this.props.location.pathname.split("/")[2] 
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    

    handleSubmit(e) {
        e.preventDefault();
        const channel = this.state;
        const { history }= this.props
        this.props.createChannel(channel).then(res => history.push(`/channels/${channel.server_id}/${res.channel.id}`));
        this.props.closeModal();
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return (
        <form className="add-channel-form">
            <div className="channel-create-head">
                <h1>CREATE TEXT CHANNEL</h1>
                <h3>IN TEXT CHANNELS</h3>
            </div>
            <div className="channel-type">
                <h3>CHANNEL TYPE</h3>
                  <div className="type-selection">
                    <button>Text Channel</button>  
                    <button>Voice Channel</button>
                  </div>
            </div>
            <h3 className="channel-name-sub">CHANNEL NAME</h3>
            <div className='channel-name-wrap'>
            <input value={this.state.name} onChange={this.handleChange("name")} type="text" />
            </div>
            <div className="create-channel-bottom">
                <button onClick={() => this.props.closeModal()} className="cancel-create-chan" type="button">
                    Cancel
                    </button>
                        <button onClick={this.handleSubmit} className="create-chan-btn" type="submit">
                    <div>Create Channel</div>
                </button>
            </div>
        </form>
        )
    }

   
}

export default withRouter(AddChannelForm);
