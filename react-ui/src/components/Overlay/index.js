import React, { Component } from 'react';
import close from '../../media/close.png'
import avatar from "../../media/avatar.png"
import learn from "../../media/learn.png"
import settings from "../../media/settings.png"
import './index.css'

function renderContent(type, toggleModal) {
    switch (type) {
        case "learn": return <div className="content">Learning coming soon!</div>
        case "settings": return <div className="content">Settings coming soon!</div>
        case "profile": return <div className="content">Profile coming soon!</div>
        case "menu": return (<div className="content">
            <button className="menu-item" onClick={() => toggleModal('learn')}>
                <img className="icon large" src={learn} alt="learning" />
            </button>
            <button className="menu-item" onClick={() => toggleModal('settings')}>
                <img className="icon large" src={settings} alt="a machine cog" />
            </button>
            <button className="menu-item" onClick={() => toggleModal('profile')}>
                <img className="icon large" src={avatar} alt="a moon" />
            </button>
        </div>)
        default: return null
    }
}

class Overlay extends Component {
    render() {
        const { visible, toggleModal } = this.props;

        if (!Boolean(visible)) {
            return null;
        }

        return (
            <div className="overlay">
                <div className="header">
                    <button className="close" onClick={() => toggleModal('')}>
                        <img className="icon" src={close} alt="close" />
                    </button>
                </div>
                <div className="content">
                    {renderContent(visible, toggleModal)}
                </div>
            </div>
        );
    }
}

export default Overlay;
