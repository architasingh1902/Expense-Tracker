import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { Provider } from "./context/context.js";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
