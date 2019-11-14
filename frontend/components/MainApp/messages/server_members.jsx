import React from 'react'
import current_user_bar from '../servers/current_user_bar';

class ServerMembers extends React.Component {
    constructor(props) {
        super(props)
        
    }

    

    renderAvatar(author) {
        let avatar;
        const imgSrc = author.image_url || "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"
        author ? avatar = (
            <div className="currentuser-avatar-wrap" aria-hidden="true">
                <div role="img" aria-hidden="true" style={{ width: '32', height: '32' }}>
                    <svg width="40" height="32" viewBox="0 0 40 32" aria-hidden="true">
                        <mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                            <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                        </mask>
                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                            <img src={imgSrc} alt=" " className="avatar-img" aria-hidden="true"></img>
                        </foreignObject>
                        {(author.online || author.id === this.props.currentUser.id) ? < rect width="10" height="10" x="22" y="22" fill="#43b581" mask="url(#svg-mask-avatar-default)" className="online-circle" ></rect > : null }
                        
                    </svg>
                </div>
            </div>
        ) : null

            
        return avatar;
    }

    renderUsername(author) {
        const {currentServer} = this.props
        let username;
        author ? username = (
            <div className="user-info">
                <div className="message-author">{author.username}</div>
                { currentServer ? author.id === currentServer.owner_id ? <div className="crown-hover-wrap"> <svg aria-label="Server Owner" name="Crown" className="crown-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 16 16">
                    <path fillRule="evenodd" clipRule="evenodd" 
                    d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z" 
                    fill="currentColor"></path>
                    </svg>
                    <div className="crown-tooltip">Server Owner</div>
                    </div> : null : null } 
            </div>
        ) : null
        return username;
    }

    render() {
       const {currentServer} = this.props;
       const {users} = this.props;
       const members = currentServer ? currentServer.member_ids.map(memberId => {
            return users[memberId];
       }) : [];

       const onlineMembers = members.filter(member => {
           return (member.online || member.id === this.props.currentUser.id)
        }); 

        const onlineMemberlist = onlineMembers.map(member => {
            return (
                <li className="member-item" key={member.id}>
                    {this.renderAvatar(member)}
                    {this.renderUsername(member)}
                </li>
            )
        });
           
        const offlineMembers = members.filter(member => {
            return (!member.online && !(member.id === this.props.currentUser.id))
        });

        const offlineMemberlist = offlineMembers.map(member => {
            return (
                <li className="member-item offline" key={member.id}>
                    {this.renderAvatar(member)}
                    {this.renderUsername(member)}
                </li>
            )
        });

   

       return (
           <div className="server-members-container">
           <ul>
               <div className="memberlist-header">ONLINE-{onlineMemberlist.length}</div>
               {onlineMemberlist}
                <div className="memberlist-header">OFFLINE-{offlineMemberlist.length}</div>
               {offlineMemberlist}
           </ul>
           </div>
       )
       
    }
}

export default ServerMembers;