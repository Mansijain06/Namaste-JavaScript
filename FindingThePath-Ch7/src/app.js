import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../style.css";

import Header from "./Component/Header";
import About from "./Component/About";
import Body from "./Component/Body";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Error from "./Component/Error";
import Details from "./Details";
import ResturantMenu from "./Component/ResturantMenu";
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "details",
            element: <Details />,
          },
        ],
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
