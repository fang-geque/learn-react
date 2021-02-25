import React, { PureComponent, StrictMode } from "react";

class Home extends PureComponent {
  componentWillMount() {
    console.log("home componentWillMount");
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log("Profile componentWillMount");
  }
  render() {
    return (
      <div>
        <h2>Profile</h2>
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}
