import React, { Component } from "react";
import "./index.css";

import remarkable from "remarkable";

import { entries } from "../../data";

const md = new remarkable();

class Logs extends Component {
  state = {
    logsShown: false
  };

  render() {
    return (
      <div className="logs-container">
        <div className="title">
          <h2>Trade Journal</h2>
        </div>
        <div className="notepad-view">
          {entries.map(
            (
              {
                date,
                coin,
                entry,
                exit,
                technical_analysis,
                gut_feeling,
                other_influences,
                next_time_improve,
                what_went_well,
                unexpected
              },
              i
            ) => (
              <div className="entry" key={i}>
                <div className="entry__header">
                  <h3>
                    {date}, {coin}
                  </h3>
                  <ul>
                    <li>Investment: {entry}</li>
                    <li>Exit Amount: {exit}</li>
                    <li>Winnings: {exit - entry}</li>
                  </ul>
                </div>
                <h4>What Technical Analysis did I use to enter this trade?</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(technical_analysis)
                  }}
                  className="markdown-container"
                />
                <h4>What was my gut feeling on entering this trade?</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: md.render(gut_feeling) }}
                  className="markdown-container"
                />
                <h4>Did anything else influence my decision?</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(other_influences)
                  }}
                  className="markdown-container"
                />
                <h4>What I will improve upon next time</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(next_time_improve)
                  }}
                  className="markdown-container"
                />
                <h4>What went well</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(what_went_well)
                  }}
                  className="markdown-container"
                />
                <h4>Did anything occur that was unexpected?</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(unexpected)
                  }}
                  className="markdown-container"
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Logs;
