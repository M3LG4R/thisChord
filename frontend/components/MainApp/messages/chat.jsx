import React from "react";
import MessageForm from "./message_form";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    receiveMessage(data);
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );

        this.props.fetchMessages(this.props.match.params.channelId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
            this.props.fetchMessages(this.props.match.params.channelId)
        }
        this.bottom.current.scrollIntoView();
    }

    render() {
        const messageList = Object.values(this.props.messages).map(message => {
            return (
                <li key={message.id}>
                    {message}
                    <div ref={this.bottom} />
                </li>
            );
        });
        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <div className="message-list">{messageList}</div>
                <MessageForm currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default Chat;