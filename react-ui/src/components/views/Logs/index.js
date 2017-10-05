import React, { Component } from "react";
import Pagination from "react-js-pagination";
import "./index.css";

import remarkable from "remarkable";

import { entries } from "../../../data";

const md = new remarkable();

function renderRoi(entry, exit) {
  const roi = exit - entry;
  console.log(roi);
  const img = roi > 0 ? "increase" : "decrease";
  const src = require(`../../../media/${img}.png`);
  return (
    <li className="roi">
      <img src={src} alt={img} />
      <span>{parseFloat(roi / entry * 100).toFixed(1) + "%"}</span>
    </li>
  );
}

class Logs extends Component {
  state = {
    currentPage: 1,
    resultsPerPage: 1,
    winLossFilter: "all"
  };

  handlePageChange = n => {
    console.log(n);
    if (n === this.state.currentPage) {
      return;
    }
    this.setState({ currentPage: n });
  };

  setResultsPerPage = e => {
    const value = e.target.value;
    if (value === this.state.resultsPerPage) {
      return;
    }
    this.setState({ resultsPerPage: Number(value) });
  };

  filterWinsOrLosses = e => {
    const value = e.target.value;
    if (value === this.state.winLossFilter) {
      return;
    }
    this.setState({ winLossFilter: value });
  };

  render() {
    const { resultsPerPage, currentPage, winLossFilter } = this.state;

    return (
      <div className="logs-container">
        <div className="title">
          <h2>Trade Logs</h2>
          <div className="filter__bar">
            <div className="filter__item">
              <label>Per Page:</label>
              <select value={resultsPerPage} onChange={this.setResultsPerPage}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
            </div>
            <div className="filter__item">
              <label>Show:</label>
              <select value={winLossFilter} onChange={this.filterWinsOrLosses}>
                <option value="all">all</option>
                <option value="wins">wins</option>
                <option value="losses">losses</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pagination-container">
          <Pagination
            prevPageText="prev"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            hideDisabled
            activePage={currentPage}
            itemsCountPerPage={resultsPerPage}
            totalItemsCount={entries.length}
            pageRangeDisplayed={3}
            onChange={this.handlePageChange}
          />
          <div className="line-break" />
        </div>

        <div className="notepad-view">
          {entries
            .slice(
              currentPage * resultsPerPage - resultsPerPage,
              currentPage * resultsPerPage
            )
            .filter(e => {
              switch (winLossFilter) {
                case "wins":
                  return Boolean(e.exit - e.entry) && e;
                case "losses":
                  return !Boolean(e.exit - e.entry) && e;
                default:
                  return e;
              }
            })
            .map(
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
                    <div>
                      <h3>
                        <span className="date">{date}</span>
                        <span className="coin">{coin}</span>
                      </h3>
                    </div>
                    <div>
                      <ul>
                        {renderRoi(entry, exit)}
                        <li className="text">
                          <span>Investment: {entry}</span>
                          <span>Exit Amount: {exit}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    What Technical Analysis did I use to enter this trade?
                  </h4>
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
                  <h4>What I will improve upon next time?</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: md.render(next_time_improve)
                    }}
                    className="markdown-container"
                  />
                  <h4>What went well?</h4>
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
