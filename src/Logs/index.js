import React, { Component } from 'react';
import './index.css'
import { entries } from '../data'

class Logs extends Component {
    render() {
        return (
            <div className="logs-container">
                <table className="logs">
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
                        {entries.map(({ date, market, invest, roi, gains, decision, learning }, i) => (
                            <tr key={i}>
                                <td>{date}</td>
                                <td>{market}</td>
                                <td>{invest}</td>
                                <td>{roi}</td>
                                <td>{gains}</td>
                                <td className="larger-text">{decision}</td>
                                <td className="larger-text">{learning}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Logs;
