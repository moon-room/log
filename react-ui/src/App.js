import React, { Component } from "react";
import Header from "./components/views/Header/";
import Logs from "./components/views/Logs/";
import AddEntry from "./components/views/AddEntry/";
import Overlay from "./components/views/Overlay";

class App extends Component {
  state = {
    modalVisible: ""
  };

  toggleModal = which => {
    if (Boolean(which)) {
      document.body.className += "noScroll";
    } else {
      document.body.className = document.body.className.replace(
        /\bnoScroll\b/,
        ""
      );
    }

    this.setState({ modalVisible: which });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <div>
        <Overlay visible={modalVisible} toggleModal={this.toggleModal} />

        <Header toggleModal={this.toggleModal} />

        <div className="content">
          <AddEntry />
          <Logs />
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
