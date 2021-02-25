import React, { Component } from "react";

function Home(props) {
  return <h1>{props.message}</h1>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
    };
  }

  componentDidUpdate() {
    // 方式二：获取异步更新的state
    console.log(this.state.message); //你好啊,李银河
  }

  changeText() {
    // 2. setState是异步更新
    // this.setState({
    //   message: "你好啊，李银河",
    // });

    // console.log(this.state.message); // hello world

    // 方式一： 获取异步更新后的数据
    // setState(更新的state,回调函数)
    this.setState(
      {
        message: "你好啊,李银河",
      },
      () => {
        console.log(this.state.message); // 你好啊,李银河
      }
    );
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.message}</h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Home message={this.state.message} />
      </div>
    );
  }
}
