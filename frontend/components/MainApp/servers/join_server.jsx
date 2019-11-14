import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
// import { createServer } from '../../../actions/server_actions';
import { joinServer } from '../../../actions/server_actions';
import { clearErrors } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';

class JoinServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invite_code: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinServer(this.state).then(({server}) => {
            this.props.closeModal();
            this.props.history.push(`/channels/${server.id}/${server.channel_ids[0]}`)
        });
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    renderErrors(errortype) {
        const { errors } = this.props;
        let filteredErrors;
        if (errors.length) {
            filteredErrors = errors.filter((error) => error.includes(errortype));
            if (filteredErrors.length > 0) {
                return (
                    <>
                        {filteredErrors.map((error, i) => (
                            <span className="session-error-msg" key={`error-${i}`}>
                                <span>-</span>
                                {error}
                            </span>
                        ))}
                    </>
                );
            }
        }
    }

    render() {
        let inviteError = this.renderErrors("invite")
        return (
            <>
                
                <form className="create-form">
                    <h4 className="join-head">JOIN A SERVER</h4>
                    <h5>Enter an invite below to join an existing server. The invite will look something like these:</h5>
                    <div className="form-input join">
                        <p>PJM6Vg</p>
                        <p>GLLe8g</p>
                        <p>T8Dzvg</p>
                        <input className={ inviteError ? "error" : ""} value={this.state.invite_code} onChange={this.handleChange("invite_code")} type="text" />
                        <span className="invite-sub">Enter an invite</span>{inviteError}
                    </div>
                    <div className="bottom-nav">
                        <button onClick={() => this.props.openModal("add server")} className="cancel-create" type="button">
                            BACK
                    </button>
                        <button onClick={this.handleSubmit} className="createbtn join" type="submit">
                            <div>Join</div>
                        </button>
                    </div>
                </form>

            </>
        );
    }
}

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server
})

const mdp = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    joinServer: (server) => dispatch(joinServer(server)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(msp, mdp)(JoinServerForm));