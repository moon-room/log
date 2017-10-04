import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import info from "../../media/info-white.png";
import add from "../../media/add-white.png";
import close from "../../media/close-white.png";
import "./index.css";

import classnames from "classnames";

class Entry extends Component {
  state = {
    entryShown: false,
    coin: "ETH",
    enter: 0.1,
    exit: 0.2,
    ta: "",
    gut: "",
    other: "",
    unexpected: "",
    nextImprove: "",
    wentWell: "",
    step: 1
  };

  enterTrade = e => {
    // TODO: save trade entrance and set up for trade exit
    // - upload draft to database
    // - get callback from database entry, store id
    // - add this to state.openTrades
    this.setState({
      step: 2
    });
  };

  exitTrade = e => {
    // TODO: update entered trade with exit details && complete
    this.setState({
      step: 1,
      entryShown: false
    });
  };

  render() {
    const {
      entryShown,
      coin,
      enter,
      exit,
      ta,
      gut,
      other,
      unexpected,
      nextImprove,
      wentWell,
      step
    } = this.state;

    const formClasses = classnames("form", {
      "entry-shown": entryShown
    });

    return step === 1 ? (
      <div className={formClasses}>
        <div className="title">
          <h3>{step < 1 ? "Enter Trade" : "Enter Trade"}</h3>
          <img
            alt="information icon"
            className="info-icon"
            src={info}
            data-tip="hello world"
          />
          {entryShown ? (
            <button
              className="transparent"
              onClick={() =>
                this.setState({
                  entryShown: false
                })}
            >
              <img alt="close" className="close-icon" src={close} />
            </button>
          ) : (
            <button
              className="transparent"
              onClick={() =>
                this.setState({
                  entryShown: true
                })}
            >
              <img alt="add" className="add-icon" src={add} />
            </button>
          )}
        </div>
        <ReactTooltip type="light" className="info" place="bottom">
          Please fill out the following fields below to record your trade
          journal entry. The larget textarea input fields can be formatted with{" "}
          <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
            Markdown
          </a>!
        </ReactTooltip>
        {entryShown && (
          <div className="body">
            <div className="input-container">
              <label>Coin: </label>
              <input
                className="coin-input"
                maxLength="8"
                type="text"
                onChange={e =>
                  this.setState({
                    coin: e.target.value
                  })}
                value={coin}
              />
            </div>
            <div className="input-container">
              <label>Investment: </label>
              <input
                type="number"
                onChange={e =>
                  this.setState({
                    investment: e.target.value
                  })}
                value={enter}
              />
            </div>
            <div className="input-container">
              <label>What was your gut feeling on entering?</label>
              <textarea
                placeholder="Butterflies"
                onChange={e =>
                  this.setState({
                    why: e.target.value
                  })}
                value={gut}
              />
            </div>
            <div className="input-container">
              <label>What technical indicators did you observe?</label>
              <textarea
                placeholder="I bought in just before the Golden Cross..."
                onChange={e =>
                  this.setState({
                    why: e.target.value
                  })}
                value={ta}
              />
            </div>
            <div className="input-container">
              <label>What other things prompted this trade?</label>
              <textarea
                placeholder="Tradingview charts, twitter links, etc..."
                onChange={e =>
                  this.setState({
                    other: e.target.value
                  })}
                value={other}
              />
            </div>
            <div>
              <button className="green" onClick={this.enterTrade}>
                Enter Trade
              </button>
            </div>
          </div>
        )}
      </div>
    ) : (
      <div className={formClasses}>
        <div className="title">
          <h3>Exit Trade</h3>
          <img
            alt="information icon"
            className="info-icon"
            src={info}
            data-tip="hello world"
          />
        </div>
        <ReactTooltip type="light" className="info" place="bottom">
          Please fill out the following fields below to record your trade
          journal entry. The "Why" and "Learn" input fields can be formatted
          with{" "}
          <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
            Markdown
          </a>!
        </ReactTooltip>
        {entryShown && (
          <div className="body">
            <div className="input-container">
              <label>Exit trade with... </label>
              <input
                type="number"
                onChange={e =>
                  this.setState({
                    exit: e.target.value
                  })}
                value={exit}
              />
            </div>
            <div className="input-container">
              <label>What went well?</label>
              <textarea
                placeholder="You know, I made a lot of fucking money..."
                onChange={e =>
                  this.setState({
                    wentWell: e.target.value
                  })}
                value={wentWell}
              />
            </div>
            <div className="input-container">
              <label>What will you do better next time?</label>
              <textarea
                placeholder="I think I could have gotten out earlier with more profit..."
                onChange={e =>
                  this.setState({
                    nextImprove: e.target.value
                  })}
                value={nextImprove}
              />
            </div>
            <div className="input-container">
              <label>Did anything happen unexpectedly?</label>
              <textarea
                placeholder="Well out of nowhere..."
                onChange={e =>
                  this.setState({
                    unexpected: e.target.value
                  })}
                value={unexpected}
              />
            </div>
            <div>
              <button className="green" onClick={this.exitTrade}>
                Complete Trade
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Entry;
