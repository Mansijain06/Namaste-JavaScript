import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor" + this.props.name);
  }

  componentDidMount() {
    // const userDetail = await fetch("https://api.github.com/users/mansijain06");
    // console.log(await userDetail.json());
    console.log("component did mount" + this.props.name);
  }

  render() {
    console.log("render class" + this.props.name);
    return (
      <div>
        <h1>Profile class Component</h1>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Count Btn
        </button>
      </div>
    );
  }
}

export default ProfileClass;
