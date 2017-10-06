import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Match, Redirect } from "react-router";
import "./index.css";
import MoonLog from "./components/views/MoonLog";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<MoonLog />, document.getElementById("root"));
registerServiceWorker();
