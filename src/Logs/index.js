import React, { Component } from 'react';
import moment from 'moment'

const entries = [
    {
        date: moment().format('MMM Do'),
        market: "BTC-USD",
        invest: 0.1,
        roi: 0.2,
        gains: 0.1,
        decision: "just another filler",
        learning: "more filler"
    },
    {
        date: moment().format('MMM Do'),
        market: "BTC-USD",
        invest: 0.1,
        roi: 0.2,
        gains: 0.1,
        decision: "just another filler",
        learning: "more filler"
    }
]

class Logs extends Component {
    render() {
        return (
            <table class="logs">
                <thead>
                    <tr>
                        <th>date</th>
                        <th>market</th>
                        <th>invest</th>
                        <th>roi</th>
                        <th>% gainz</th>
                        <th>decision</th>
                        <th>learning</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map(({ date, market, invest, roi, gains, decision, learning }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{market}</td>
                            <td>{invest}</td>
                            <td>{roi}</td>
                            <td>{gains}</td>
                            <td>{decision}</td>
                            <td>{learning}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Logs;
