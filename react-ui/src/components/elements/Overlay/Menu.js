import React from "react";
import avatar from "../../../media/avatar.png";
import learn from "../../../media/learn.png";
import settings from "../../../media/settings.png";

export default function Menu({ toggleModal }) {
  return (
    <div className="content">
      <button className="menu-item" onClick={() => toggleModal("learn")}>
        <img className="icon large" src={learn} alt="learning" />
      </button>
      <button className="menu-item" onClick={() => toggleModal("settings")}>
        <img className="icon large" src={settings} alt="a machine cog" />
      </button>
      <button className="menu-item" onClick={() => toggleModal("profile")}>
        <img className="icon large" src={avatar} alt="a moon" />
      </button>
    </div>
  );
}
