import React, { PureComponent } from "react";

// mixin : 混入

class Home extends PureComponent {
  // 即将渲染获取一个时间 beginTime
  UNSAFE_componentWillMount() {
    this.benginTime = Date.now();
  }

  render() {
    return <h2>Home</h2>;
  }

  // 渲染完成获取时间 endtime
  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.benginTime;
    console.log("Home渲染时间", interval);
  }
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
