import React from 'react';
import { Link } from 'react-router-dom';
import ServerIcon from './server_icon';


class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.openModal('add server')
    }

    componentDidMount() {
        if (Object.keys(this.props.servers).length === 0) {
            this.props.fetchServers();
        }
    }

    render() {
        const servers = Object.values(this.props.servers);
        const serverIcons = servers.map(server => <ServerIcon server={server} key={server.id} />);
        return (
            <>
            <div className="scroll-wrapper">
            <ul className="server-index">
                <div className="server-icon-wrap">
                    <Link to="/channels/@me" className="server-open logo">
                        <svg
                            className="discord-logo"
                            width="28"
                            height="28"
                            viewBox="0 0 28 20"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path fill="currentColor" d="M 20.6644 20 C 20.6644 20 19.8014 18.9762 19.0822 18.0714 C 22.2226 17.1905 23.4212 15.2381 23.4212 15.2381 C 22.4384 15.881 21.5034 16.3334 20.6644 16.6429 C 19.4658 17.1429 18.3151 17.4762 17.1884 17.6667 C 14.887 18.0953 12.7774 17.9762 10.9795 17.6429 C 9.61301 17.381 8.43836 17 7.45548 16.6191 C 6.90411 16.4048 6.30479 16.1429 5.70548 15.8096 C 5.63356 15.7619 5.56164 15.7381 5.48973 15.6905 C 5.44178 15.6667 5.41781 15.6429 5.39384 15.6191 C 4.96233 15.381 4.7226 15.2143 4.7226 15.2143 C 4.7226 15.2143 5.87329 17.1191 8.91781 18.0238 C 8.19863 18.9286 7.31164 20 7.31164 20 C 2.0137 19.8333 0 16.381 0 16.381 C 0 8.7144 3.45205 2.50017 3.45205 2.50017 C 6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861 L 10.4281 0.285909 C 6.11301 1.52399 4.12329 3.40493 4.12329 3.40493 C 4.12329 3.40493 4.65068 3.11921 5.53767 2.71446 C 8.10274 1.59542 10.1404 1.2859 10.9795 1.21447 C 11.1233 1.19066 11.2432 1.16685 11.387 1.16685 C 12.8493 0.976379 14.5034 0.92876 16.2295 1.11923 C 18.5068 1.38114 20.9521 2.0478 23.4452 3.40493 C 23.4452 3.40493 21.5514 1.61923 17.476 0.381146 L 17.8116 0.000197861 C 17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017 C 24.5479 2.50017 28 8.7144 28 16.381 C 28 16.381 25.9623 19.8333 20.6644 20 Z M 9.51712 8.88106 C 8.15068 8.88106 7.07192 10.0715 7.07192 11.5239 C 7.07192 12.9763 8.17466 14.1667 9.51712 14.1667 C 10.8836 14.1667 11.9623 12.9763 11.9623 11.5239 C 11.9863 10.0715 10.8836 8.88106 9.51712 8.88106 Z M 18.2671 8.88106 C 16.9007 8.88106 15.8219 10.0715 15.8219 11.5239 C 15.8219 12.9763 16.9247 14.1667 18.2671 14.1667 C 19.6336 14.1667 20.7123 12.9763 20.7123 11.5239 C 20.7123 10.0715 19.6336 8.88106 18.2671 8.88106 Z" />
                        </svg>
                    </Link>
                    <div className="hover-wrap">
                        <span className="server-icon-hover">Home</span>
                    </div>
                </div>
                {serverIcons}
                <button onClick={this.handleClick} className="server-open join-create" value="Join/Create Server">
                        <svg
                            className="plus-sign"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path fill="currentColor" d="M.21 11.001 H 13 V 3.00098 H 11 V 11.001 H 3 V 13.001 H 11 V 21.001 H 13 V 13.001 H 21 V 11.001 Z" />
                        </svg>
                </button>
            </ul>
            </div>
            </>

        );
    }
}

export default ServerIndex;