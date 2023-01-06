import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/images/NamasteDevLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function App() {
  return (
    <div className="title">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
    </div>
  );
}

function ParentComponent() {
  return (
    <div className="header">
      <img src={Logo} alt="Namaste Dev" height="50px" />
      <input type="text" placeholder="search" />
      <FontAwesomeIcon icon={faUser} className="user-icon" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ParentComponent />);
