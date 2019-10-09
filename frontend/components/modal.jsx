import React from 'react';
import { connect } from 'react-redux';
import AddServerModal from './MainApp/servers/add_server_modal'
import { closeModal } from '../actions/modal_actions';
import CreateServerForm from './MainApp/servers/create_server_form'
import JoinServerForm from './MainApp/servers/join_server';
function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'add server':
            component = <AddServerModal />;
            break;
        case 'create server':
            component = <CreateServerForm />;
            break;
        case 'join server':
            component = <JoinServerForm />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);