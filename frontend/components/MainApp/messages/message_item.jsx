import React from "react";

class MessageItem extends React.Component {
    constructor(props) {
        super(props)

    }


    renderTimeStamp(date) {
        let timeStamp = "";
        const days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"];
        const messageTime = new Date(date)
        const currentTime = Date.now();
        const stringTime = messageTime.toLocaleTimeString();
        const formatTime = stringTime.slice(0, -6) + stringTime.slice(-3);
        const timeSince = (currentTime - messageTime.getTime()) / (24 * 60 * 60 * 1000)
        // const day = messageTime.getDay();
        // const formatDay = day > 9 ? day : `0${day}`;
        if (timeSince < 1) {
            timeStamp = messageTime.toLocaleDateString() === new Date(currentTime).toLocaleDateString() ? `Today at ${formatTime}` : `Yesterday at ${formatTime}`
        } else if (timeSince > 1 && timeSince < 2) {
            timeStamp = (new Date(currentTime).getDate() - messageTime.getDate()) === 1 ? `Yesterday at ${formatTime}` : `Last ${days[messageTime.getDay()]} at ${formatTime}`
        } else if (timeSince >= 2 & timeSince < 7 ) {
            timeStamp = `Last ${days[messageTime.getDay()]} at ${formatTime}`
        } else if (timeSince >= 7)  {
            timeStamp = messageTime.toLocaleDateString('en-us', {month: "2-digit",day: "2-digit", year: "numeric"});
        }
        return (
            <div className="message-time">{timeStamp}</div>
        )

    }

    urlParse(message) {
        const urls = message.match(/\bhttps?:\/\/\S+/gi)
        if (urls) { 
            const frames = urls.map(url => {
                let match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)
                return (match && match[2].length == 11) ? <iframe className="utube" key={Math.random()} src={`http://www.youtube.com/embed/${match[2]}`} allowFullScreen="true"></iframe> : null
            });
            return frames;
        }


    }

    renderfullTimeStamp(date) {
        const days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"]
        const months = 
        [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
                    
        ];
        const messageTime = new Date(date);
        const stringTime = messageTime.toLocaleTimeString();
        const formatTime = stringTime.slice(0, -6) + stringTime.slice(-3);
        const timeStamp = 
        `${days[messageTime.getDay()]}, ${months[messageTime.getMonth()]} ${messageTime.getDate()}, ${messageTime.getFullYear()} ${formatTime}`
        return (
            <div className="time-tooltip">{timeStamp}</div>
        );
    }

    renderAvatar(author) {
        let avatar;
        const imgSrc = author.image_url || "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"
        author ? avatar = (
        <div className="avatar-wrap" aria-hidden="true">
            <div role="img" aria-hidden="true" style={{width: '40', height: '40'}}>
                <svg width="49" height="40" viewBox="0 0 49 40"  aria-hidden="true">
                        <mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                            <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                        </mask>
                    <foreignObject x="0" y="0" width="40" height="40" mask="url(#svg-mask-avatar-default)">
                            <img src={imgSrc} alt=" " className="avatar-img" aria-hidden="true"></img>
                    </foreignObject>
                </svg>
            </div>
        </div>
        ) : null
        return avatar;
    }

    renderDivider(date) {
        let divider;
        const messageTime = new Date(date);
        const months =
        [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"

        ];

        divider = `${months[messageTime.getMonth()]} ${messageTime.getDate()}, ${messageTime.getFullYear()}`
        return (
            <div className="date-divider">
            <span>{divider}</span>
            </div>
        )


    }

    renderUsername(author) {
        let username;
        author ? username = (
            <div className="message-author">{author.username}</div>
        ) : null
        return username;
    }

    render() {
        let messageItem;
        const {message} = this.props;
        const {messageAuthor} = this.props;
        if (message && messageAuthor) {
            messageItem = (
                <div className={`message-container ${message.noborder ? "margin-top" : message.header ? "border-top" : ""}`}>
                    <hr className={`${message.noborder ? "" : message.newDate ? "" : message.header ? "display" : ""}`} />
                    {message.newDate ? this.renderDivider(message.created_at) : null}
                    {message.header ? <header className='message-header'>
                    { this.renderAvatar(messageAuthor) }
                    <div className="time-hover-wrap">
                    { this.renderUsername(messageAuthor) }
                    <div className="time-hover">
                    { this.renderTimeStamp(message.created_at) }
                    { this.renderfullTimeStamp(message.created_at )}
                    </div>
                    </div>
                    </header> : null }
                    <div className="message-content">{message.body}</div>
                    {this.urlParse(message.body)}
                </div>
            )
        }
        return (
            <>
           {messageItem}
           </>
        )
    }
    

}

export default MessageItem;