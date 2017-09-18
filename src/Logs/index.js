import React, { Component } from 'react';
import './index.css'
import remarkable from 'remarkable'
import { entries } from '../data'

const md = new remarkable()

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
                                <td dangerouslySetInnerHTML={{ __html: md.render(decision) }} className="larger-text" />
                                <td dangerouslySetInnerHTML={{ __html: md.render(learning) }} className="larger-text" />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Logs;
