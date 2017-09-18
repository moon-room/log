import React, { Component } from 'react';
import Header from './Header/'
import Logs from './Logs/'
import Entry from './Entry/'

class App extends Component {
  state = {
    profileModalVisible: false,
    consultingModalVisible: false,
    settingsModalVisible: false,
  }

  toggleModal = which => {
    switch (which) {
      case "profile": this.setState({
        profileModalVisible: !this.state.profileModalVisible
      }); break;
      case "consulting": this.setState({
        consultingModalVisible: !this.state.consultingModalVisible
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
