import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "../style.css";

import Header from "./Component/Header";
// import About from "./Component/About";
import Body from "./Component/Body";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Error from "./Component/Error";
import Details from "./Details";
import ResturantMenu from "./Component/ResturantMenu";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Instamart from "./Component/Instamart";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./Component/About"));
//when we load component in demand react tries to suspend it

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Mansi",
    email: "mansi@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "details",
            element: <Details />,
          },
        ],
      },
      {
        path: "instamart",
        element: <Instamart />,
      },
      {
        path: "resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
