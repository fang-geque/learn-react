import React, { Component } from "react";

class Cpn extends Component {
  render() {
    return (
      <div>
        <h2>我是Cpn组件</h2>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("调用了Cpn的componentWillUnmount方法");
  }
}

export default class index extends Component {
  constructor() {
    super();
    console.log("执行了组件的constructor");

    this.state = {
      counter: 0,
      isShow: true,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log("执行了组件的render函数");

    return (
      <div>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <hr />

        <button
          onClick={(e) => {
            this.setState({ isShow: !this.state.isShow });
          }}
        >
          切换
        </button>
        {this.state.isShow && <Cpn></Cpn>}
      </div>
    );
  }

  componentDidMount() {
    console.log("执行了组件的ComponentDidMount");
  }

  componentDidUpdate(prevProps,prev) {
    console.log("执行了组件的componentDidUpdate");
  }
  
}
