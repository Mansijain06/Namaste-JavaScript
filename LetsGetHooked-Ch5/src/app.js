import React from "react";
import ReactDOM from "react-dom/client";
import "../style.css";

import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
