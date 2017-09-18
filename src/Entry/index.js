import React, { Component } from 'react';

class Entry extends Component {
    state = {
        marketOne: "ETH",
        marketTwo: "BTC",
        investment: 0.1,
        roi: 0.2,
        why: "",
        learned: "",
    }
    render() {
        return (
            <div class="form">
                <p>
                    <label for="size_1">Market: </label>
                    <input type="text" value={this.state.marketOne} />
                    <input type="text" value={this.state.marketTwo} />
                </p>
                <p>
                    <label for="size_1">Investment: </label>
                    <input type="number" value={this.state.investment} />
                </p>
                <p>
                    <label for="size_1">ROI: </label>
                    <input type="text" value={this.state.roi} />
                </p>
                <p>
                    <label for="size_1">Why did you enter this trade?</label>
                    <textarea value={this.state.roi} />
                </p>
                <p>
                    <label for="size_1">What did you learn from this trade?</label>
                    <textarea value={this.state.roi} />
                </p>
                <p>
                    <button onPress={() => console.log("hurrrr")}>Submit Entry</button>
                </p>
            </div>
        );
    }
}

export default Entry;
