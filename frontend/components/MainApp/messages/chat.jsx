import React from "react";
import { withRouter } from 'react-router-dom';
import MessageForm from "./message_form";
import MessageItem from "./message_item";
import ServerMembers from "./server_members";
import { throws } from "assert";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
        this.receiveMessage = this.props.receiveMessage.bind(this);
       
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    if (!this.props.users[data.author_id]) {
                        this.props.fetchUser(data.author_id) //maybe refactor seperate subscriptions
                    }
                    this.receiveMessage(data);
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );
      
        // this.props.fetchUsers(this.props.match.params.serverId)
        
        this.props.fetchMessages(this.props.match.params.channelId).then(() => {
            this.bottom.current.scrollIntoView();
        })
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
            // this.props.fetchUsers(this.props.match.params.serverId)
            this.props.fetchMessages(this.props.match.params.channelId)
        }
        if (this.bottom.current && (this.props.match.params.channelId === prevProps.match.params.channelId) ) {
            this.bottom.current.scrollIntoView();
        }

        
        
    }

    groupMessages(messages) {
        let groupedMsgs = [];
        let currentGrp = [messages[0]];
        for(let i = 1; i <= messages.length - 1; i++) {

            let nextMsg = messages[i];
            let prevMsg = currentGrp[currentGrp.length - 1];
            let messageTime = new Date(nextMsg.created_at).getTime();
            let prevMsgTime = new Date(prevMsg.created_at).getTime();
            let minutesSince = (messageTime - prevMsgTime) / (60 * 1000);
            if ((nextMsg.author_id === prevMsg.author_id) && minutesSince <= 5) {
                currentGrp.push(nextMsg);

            } else {
                let newDate = new Date(nextMsg.created_at).toLocaleDateString() === new Date(prevMsg.created_at).toLocaleDateString() ? false : true;
                nextMsg.newDate = newDate;
                groupedMsgs.push(currentGrp)
                currentGrp = [nextMsg]
            }
        }
        groupedMsgs.push(currentGrp);
        // groupedMsgs.forEach(msgGroup => msgGroup[0].header = true);
        for(let i = 0; i < groupedMsgs.length; i++){
            groupedMsgs[i][0].header = true;
            // groupedMsgs[i][(groupedMsgs[i].length) - 1].border = true;
        }
        groupedMsgs[0][0].noborder = true;
        groupedMsgs = [].concat(...groupedMsgs);
        return groupedMsgs;
    }

    render() {
        const channelName = this.props.currentChannel ? this.props.currentChannel.name : null;
        const { users } = this.props;
        const channelMessages = Object.values(this.props.messages).filter(message => {
            return message.channel_id === parseInt(this.props.match.params.channelId)
        });
        const groupedMsgs = channelMessages.length ? this.groupMessages(channelMessages) : [];
        const messageList = groupedMsgs.map(message => {
            const messageAuthor = Object.values(users).length ? users[message.author_id] ? users[message.author_id] : null : null;
            return (
                <li key={message.id}>
                < MessageItem message={message} messageAuthor={messageAuthor} key={message.id} ref={this.bottom} />
                <div ref={this.bottom} />
                </li>
            );
        });
        return (
            <div className="chatroom-container">
                <header className="channel-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="header-icon">
                        <path fill="#72767d" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
                        </path>
                    </svg>
                    <div>{channelName}</div>
                </header>
                <div className="chat-content">
                <div className="chat-flex-wrap">
                <div className="message-list">
                <ul>
                    <div className="welcome-chat">
                        <h1>Welcome to the beginning of the <strong> #{this.props.currentChannel ? this.props.currentChannel.name : null} </strong> channel.</h1>
                    </div>
                    {messageList}
                </ul>
                </div>
                <MessageForm currentChannel={this.props.currentChannel} currentUser={this.props.currentUser} />
                </div>
                <ServerMembers currentUser={this.props.currentUser} currentServer={this.props.currentServer} users={this.props.users} />
                </div>
            </div>
        );
    }
}

export default Chat;