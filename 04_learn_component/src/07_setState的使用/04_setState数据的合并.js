import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
      name: "ws",
    };
  }

  changeText() {
    // 了解真相你才能获得真正的自由

    this.setState({
      message: "你好啊,李银河",
    });

    // Object.assign({}, this.state, { message: "你好啊，李银河" });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }
}
