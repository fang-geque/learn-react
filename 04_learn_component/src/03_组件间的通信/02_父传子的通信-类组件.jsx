import React, { Component } from "react";

class ChildCpn extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  componentDidMount(){
    console.log('componentDidMount',this.props)
  }

  render() {
    console.log("render", this.props);
    const { name, age, height } = this.props;

    return (
      <div>
        <h2>子组件展示数据：{`${name} : ${age} : ${height}`}</h2>
        <button onClick={e => console.log('button', this.props)}>props</button>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="ws" age={18} height={1.88} />
        <ChildCpn name="kobe" age={40} height={1.98} />
      </div>
    );
  }
}
