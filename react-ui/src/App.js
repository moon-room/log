import React, { Component } from "react";
import Header from "./components/Header/";
import Logs from "./components/Logs/";
import Entry from "./components/Entry/";
import Overlay from "./components/Overlay";

class App extends Component {
  state = {
    modalVisible: ""
  };

  toggleModal = which => this.setState({ modalVisible: which });

  render() {
    const { modalVisible } = this.state;
    return (
      <div className="container">
        <Overlay visible={modalVisible} toggleModal={this.toggleModal} />

        <Header toggleModal={this.toggleModal} />

        <div className="content">
          <Logs />
          <Entry />
        </div>
        <div className="attribution">
          <div>
            Icons from{" "}
            <a
              href="https://www.flaticon.com/"
              rel="noopener noreferrer"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
