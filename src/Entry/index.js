import React, { Component } from 'react';
import "./index.css"

class Entry extends Component {
    state = {
        coin: "ETH",
        investment: 0.1,
        roi: 0.2,
        why: "",
        learned: "",
    }
    render() {
        return (
            <div className="form">
                <p>
                    <label>Coin: </label>
                    <input className="coin-input" maxLength="8" type="text" onChange={(e) => this.setState({
                        coin: e.target.value
                    })} value={this.state.marketOne} />
                </p>
                <p>
                    <label>Investment: </label>
                    <input type="number" onChange={(e) => this.setState({
                        investment: e.target.value
                    })} value={this.state.investment} />
                </p>
                <p>
                    <label>Why enter this trade?</label>
                    <textarea placeholder="A good place to cite Fundamental and Technical Analysis used, theories, charting, etc..." onChange={(e) => this.setState({
                        why: e.target.value
                    })} value={this.state.why} />
                </p>
                <p>
                    <button onClick={() => console.log("hurrrr")}>Enter Trade</button>
                </p>
                <p>
                    <label>ROI: </label>
                    <input type="number" onChange={(e) => this.setState({
                        roi: e.target.value
                    })} value={this.state.roi} />
                </p>
                <p>
                    <label>What did you learn from this trade?</label>
                    <textarea placeholder="What did you do well? How can you improve next time?" onChange={(e) => this.setState({
                        learned: e.target.value
                    })} value={this.state.learned} />
                </p>
                <p>
                    <button onClick={() => console.log("hurrrr")}>Complete Trade</button>
                </p>
            </div>
        );
    }
}

export default Entry;
