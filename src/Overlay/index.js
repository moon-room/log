import React, { Component } from 'react';
import close from './close.png'
import './index.css'

function renderContent(type) {
    switch (type) {
        case "learn": return <div>Learning coming soon!</div>
        case "settings": return <div>Settings coming soon!</div>
        case "profile": return <div>Profile coming soon!</div>
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
                    {renderContent(visible)}
                </div>
            </div>
        );
    }
}

export default Overlay;
