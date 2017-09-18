import React, { Component } from 'react';
import logo from "./logo.png"
import avatar from "./avatar.png"
import seo from "./seo.png"
import settings from "./settings.png"
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="icon" src={logo} alt="a moon" />
                    <h1>MOON LOG</h1>
                </div>
                <div className="settings-container">
                    <img className="icon small" src={seo} alt="a moon" />
                    <img className="icon small" src={settings} alt="a moon" />
                    <img className="icon small" src={avatar} alt="a moon" />
                </div>
            </div>
        );
    }
}

export default Header;
