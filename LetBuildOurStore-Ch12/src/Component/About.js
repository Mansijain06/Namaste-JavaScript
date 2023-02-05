import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass2 from "./ProfileClass2";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent const");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  componentDidUpdate() {
    console.log("parent component did update");
  }
  componentWillUnmount() {
    console.log("parent component will unmount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <div>About US</div>
        <Outlet />
        <ProfileClass name={"comp1"} />
        <UserContext.Consumer>
          {({ user }) => (
            <span>
              {user.name}, {user.email}
            </span>
          )}
        </UserContext.Consumer>
        {/* <ProfileClass2 name={"comp2"} /> */}
        {/* <ProfileClass2 name={"comp3"} /> */}
      </>
    );
  }
}

export default About;
