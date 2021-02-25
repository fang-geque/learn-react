import React, { PureComponent } from "react";

import { EventEmitter } from "events";

// 事件总线： event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(...args) {
    console.log(args);
  }

  render() {
    return <div>Home</div>;
  }
}

class Profile extends PureComponent {
  emmitEvent() {
    eventBus.emit("sayHello", "hello home", 123);
  }

  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emmitEvent()}>点击了Profile</button>
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile />
      </div>
    );
  }
}
