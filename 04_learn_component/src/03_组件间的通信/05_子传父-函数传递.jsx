import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    // console.log(this.props);
    const { btnClick } = this.props;

    return <button onClick={e => btnClick([1,2,3],e)}>+1</button>;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment(arr=[], e) {
    console.log("incremtnt被调用");
    console.log("arr",arr);
    console.log("e",e);

    this.setState({
      counter: this.state.counter + 1,
    });
  }


  render() {
    const { counter } = this.state;
    const test = this.state.counter;
    return (
      <div>
        <h2>当前计数： {this.state.counter}</h2>
        <h2>当前计数： {counter}</h2>
        <h2>当前计数： {test}</h2>
        <button onClick={(e) => this.increment([1,2],e)}>+1</button>
        <CounterButton btnClick={(arr,e) => this.increment(arr,e)}></CounterButton>
      </div>
    );
  }
}
