import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Igniting out app");
const heading2 = React.createElement("h2", {}, 'Namaste ReactJS');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([heading1, heading2]);