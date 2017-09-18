import React, { Component } from 'react';
import logo from "./logo.png"
import avatar from "./avatar.png"
import consulting from "./consulting.png"
import settings from "./settings.png"
import './index.css'

class Header extends Component {
    render() {
        const { toggleModal } = this.props
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="icon" src={logo} alt="a moon" />
                    <h1>MOON LOG</h1>
                </div>
                <div className="settings-container">
                    <button className="menu-item" onPress={() => toggleModal('consulting')}>
                        <img className="icon small" src={consulting} alt="humans talking to eachother" />
                    </button>
                    <button className="menu-item" onPress={() => toggleModal('settings')}>
                        <img className="icon small" src={settings} alt="a machine cog" />
                    </button>
                    <button className="menu-item" onPress={() => toggleModal('profile')}>
                        <img className="icon small" src={avatar} alt="a moon" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
