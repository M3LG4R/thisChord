import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" };
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        const currentUserId = this.props.currentUser.id;
        const currentChannelId = this.props.currentChannel.id
        e.preventDefault();
        if (this.state.body !== "") {
        App.cable.subscriptions.subscriptions[0].speak({ currentUserId, message: this.state.body, currentChannelId });
        this.setState({ body: "" });
        }
    }

    handleKeyDown(event) { 
        if (event.keyCode == 13 && !event.shiftKey) {
            this.handleSubmit(event);
        }
    }

    render() {
        return (
            <div className="chat-form-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <button className="message-submit" type="submit">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#b9bbbe" className="cross-btn"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                        </svg>
                    </button>
                    <textarea
                        rows="1"
                        className="type-message"
                        onKeyDown={this.handleKeyDown.bind(this)}
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder={this.props.currentChannel ? `Message #${this.props.currentChannel.name}` : "Type message here"}
                    ></textarea>
                </form>
            </div>
        );
    }
}

export default MessageForm;