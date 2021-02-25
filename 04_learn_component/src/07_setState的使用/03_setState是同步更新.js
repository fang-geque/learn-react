import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
    };
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", () => {
      console.log("btn被点击");
      this.setState({
        message: "你好啊,李银河",
      });
      console.log(this.state.message); //你好啊，李银河
    });

    // this.setState({
    //   message: "你好啊,李银河",
    // });
    // console.log(this.state.message); //hello world
  }

  changeText() {
    // 情况一： 将setState放入到定时器中
    setTimeout(() => {
      this.setState({
        message: "你好啊,李银河",
      });
      console.log(this.state.message); //你好啊，李银河
    }, 0);

    // this.setState({
    //   message: "你好啊,李银河",
    // });
    // console.log(this.state.message); //hello world
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }
}
