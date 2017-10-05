import React, { Component } from "react";
import logo from "../../../media/logo.png";
import avatar from "../../../media/avatar.png";
import learn from "../../../media/learn.png";
import settings from "../../../media/settings.png";
import menu from "../../../media/menu.png";
import "./index.css";

class Header extends Component {
  render() {
    const { toggleModal } = this.props;

    return (
      <div className="header">
        <div className="container">
          <div className="left">
            <div className="logo-container">
              <img className="icon" src={logo} alt="a moon" />
            </div>

            <div className="title">
              <h1>MOON LOG</h1>
              <h2>Trade, reflect, learn, grow.</h2>
            </div>
          </div>

          <div className="menu-container">
            <button className="menu-item" onClick={() => toggleModal("learn")}>
              <img className="icon small" src={learn} alt="learning" />
            </button>
            <button
              className="menu-item"
              onClick={() => toggleModal("settings")}
            >
              <img className="icon small" src={settings} alt="a machine cog" />
            </button>
            <button
              className="menu-item"
              onClick={() => toggleModal("profile")}
            >
              <img className="icon small" src={avatar} alt="a moon" />
            </button>
          </div>

          <div className="mobile-menu-container">
            <button className="menu-item" onClick={() => toggleModal("menu")}>
              <img
                className="icon extra-small"
                src={menu}
                alt="three dots menu icon"
              />
            </button>
          </div>
        </div>
        <div className="arrow__wrapper">
          <div className="trans__separator">
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
