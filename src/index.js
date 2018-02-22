import React from "react";
import ReactDOM from "react-dom";
import Presentation from "./presentation";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Presentation />, document.getElementById("root"));
registerServiceWorker();

document.title = "What's New in React 16.3";
