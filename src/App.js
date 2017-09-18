import React, { Component } from 'react';
import Header from './Header/'
import Logs from './Logs/'
import Entry from './Entry/'

class App extends Component {
  render() {
    return (
      <div className="container">

        <Header />

        <div className="content">

          <Logs />
          <Entry />

        </div>
      </div>
    );
  }
}

export default App;
