import { Link } from "react-router-dom";
import React from 'react';
class LandingPage extends React.Component {
    constructor(props){
        super(props);

    }

    renderAppbutton() {
        if (this.props.currentUser) {
            return (
                <Link className="app-button" to="/channels/@me">Open</Link>
            );
        } else {
            return (
                <Link className="app-button" to="/login">Login</Link>
            );
        }
    }

    renderTempLogout() {
        if (this.props.currentUser) {
            return (
                <button onClick={this.props.logout}>Logout</button>
            );
        }
    }

    render() {
        return (
            <>
            <div className="splash-bg">
                <header className="header-nav">
                    <nav className="full-nav">
                        <ul className="nav-left">
                            <li><a href="/">Cool Links</a></li>
                            <li><a href="/">Cool Links</a></li>
                            <li><a href="/">Cool Links</a></li>
                        </ul>
                        <ul className ="nav-right">
                            <li><a href="/">Git</a></li>
                            <li><a href="/">Linked</a></li>
                            <li>{this.renderAppbutton()}</li>
                            <li> {this.renderTempLogout()}</li>
                        </ul>
                    </nav>
                </header>
                <header className="splash-msg">
                    <p>It's time to ditch Skype and Teamspeak.</p> 
                    <section>All-in-one voice and text chat for gamers that's free, secure and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</section>
                    <div className="splash-btn-cont">
                        <div className="splash-btns">
                            <a className="green-button"href="/">Download</a>
                            <a className="blue-button" href="/">Open Discord in your browser</a>
                        </div>
                    </div>
                </header>
                <div className="cool-pics">
                    <img src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg" className="desktop"/>
                    <img src="https://discordapp.com/assets/0b5a0339571e72656eea93eb55d73eae.svg" className='potion' />
                    <img src="https://discordapp.com/assets/eb301f28da3199edbd3ef19690d61674.svg" className="bomb"/>
                    <img src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg" className="coin"/>
                    <img src="https://discordapp.com/assets/215346366a9a7d50924fc245ddb048d2.svg" className="game-cartridge"/>
                    <img src="https://discordapp.com/assets/15149ecb9d5cd8faa24e1bbf45d70e5b.svg" className="shield"/>
                    <img src="https://discordapp.com/assets/81d74b2ebb053fbccee41865a47d48c3.svg" className="qbox"/>
                    <img src="https://discordapp.com/assets/5a31f41848bf3ba1817a092ac28c623d.svg" className="android"/>
                    <img src="https://discordapp.com/assets/82fa4f388cfc9cf47a6972ae39ae90de.svg" className="iphone"/>
                    <img src="https://discordapp.com/assets/c4bae281354a2b4e2db85415955e0994.svg" className="game-controller"/>
                    <img src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg" className="laptop"/>
                    <img src="https://discordapp.com/assets/69db64955960eb333f5ff831cc1c0294.svg" className="headphones"/>
                    <img src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg" className="coin-2" />





?

                </div>

                {/* <svg className="clyde-2-VPBZ logo-1U_ovC flexChild-FMspoG" viewBox="0 0 33 36" style={{flexGrow: 0, flexShrink: 0 }}>
                <ellipse cx="19.6" cy="17.1" rx="1.9" ry="2"></ellipse>
                <ellipse cx="12.8" cy="17.1" rx="1.9" ry="2"></ellipse>
                <path d="M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z"></path>
                </svg>
                <svg className="type-1G6S2n logo-1U_ovC flexChild-FMspoG" viewBox="0 0 98 36" style={{flexGrow:0, flexShrink:0 }}>
                <path d="M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z"></path>
                </svg> */}
           
            </div>
            </>
        );
        
    }
}

export default LandingPage;