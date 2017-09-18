import React, { Component } from 'react';
import Header from './Header/'
import Logs from './Logs/'
import Entry from './Entry/'

class App extends Component {
  state = {
    profileModalVisible: false,
    learnModalVisible: false,
    settingsModalVisible: false,
  }

  toggleModal = which => {
    switch (which) {
      case "profile": this.setState({
        profileModalVisible: !this.state.profileModalVisible
      }); break;
      case "learn": this.setState({
        learnModalVisible: !this.state.learnModalVisible
      }); break;
      case "settings": this.setState({
        settingsModalVisible: !this.state.settingsModalVisible
      }); break;
      default: console.log("how did you get here?")
    }
  }

  render() {
    return (
      <div className="container">

        <Header toggleModal={this.toggleModal} />

        <div className="content">

          <Logs />
          <Entry />

        </div>
      </div>
    );
  }
}

export default App;
