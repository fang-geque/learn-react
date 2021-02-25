import React, { PureComponent, createRef, forwardRef } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return <h2 ref={this.props.homeRef}>Home</h2>;
  }
}

// 高阶组件
const Profile = forwardRef(function Profile(props, ref) {
  return <p ref={ref}>Profile</p>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef1 = createRef();
    this.homeRef2 = createRef();
    this.profileRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home homeRef={this.homeRef1} />
        <Home ref={this.homeRef2} />
        <Profile ref={this.profileRef} />
        <button onClick={(e) => this.printRef()}>按钮</button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef1.current);
    console.log(this.homeRef2.current);
    console.log(this.profileRef.current);
  }
}
