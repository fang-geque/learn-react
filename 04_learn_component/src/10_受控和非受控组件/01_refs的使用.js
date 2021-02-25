import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.counterRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/* <h2 ref="字符串/对象/函数">Hello React</h2> */}
        <h2 ref="titleRef">Hello React</h2>

        {/* 目前react推荐的方式 */}
        <h2 ref={this.titleRef}>Hello React</h2>

        {/* 回调函数 */}
        <h2 ref={(arg) => (this.titleEl = arg)}>Hello React</h2>

        <button onClick={(e) => this.changeText()}>改变文本</button>

        <hr />
        <Counter ref={this.counterRef}></Counter>
        <button onClick={(e) => this.appBtnClick()}>App按钮</button>
      </div>
    );
  }

  changeText() {
    // 1.使用方式一：字符串(不推荐，后续可能废弃)
    console.log("this.refs.titleRef", this.refs.titleRef);
    this.refs.titleRef.innerHTML = "hello ws";

    // 2.使用方式二: 对象方式
    console.log("this.titleRef", this.titleRef.current);
    this.titleRef.current.innerHTML = "hello JavaScript";

    // 3.使用方式三:回调函数方式
    console.log("this.titleEl", this.titleEl);
    this.titleEl.innerHTML = "hello python";
  }

  appBtnClick() {
    console.log(this.counterRef.current);
    this.counterRef.current.increment();
  }
}
