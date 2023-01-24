import React from "react";

export default class ProfileClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 3 };
    console.log("profile class 2 constructor");
  }

  async componentDidMount() {
    console.log("component did mount class 2 ");
    const userDetail = await fetch("https://api.github.com/users/mansijain06");
    console.log(await userDetail.json());
  }
  render() {
    console.log("render class 2");
    return <div>Profile class 2</div>;
  }
}
