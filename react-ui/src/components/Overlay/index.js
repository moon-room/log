import React, { Component } from "react";
import "./index.css";

import Menu from "./Menu";
import Settings from "./Settings";
import Profile from "./Profile";
import Learn from "./Learn";

import close from "../../media/close.png";

function renderContent(type, toggleModal) {
  switch (type) {
    case "learn":
      return <Learn />;
    case "settings":
      return <Settings />;
    case "profile":
      return <Profile />;
    case "menu":
      return <Menu toggleModal={toggleModal} />;
    default:
      return null;
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
          <button className="icon-button" onClick={() => toggleModal("")}>
            <img className="icon" src={close} alt="close" />
          </button>
        </div>
        <div className="content">{renderContent(visible, toggleModal)}</div>
      </div>
    );
  }
}

export default Overlay;
