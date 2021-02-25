import React, { PureComponent, createContext } from "react";

// 定义一个高阶组件
function withUser(WarppedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WarppedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

// 创建Context
const UserContext = createContext({
  nickname: "默认",
  age: -1,
  height: "中国",
});

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home:
        {`昵称：${this.props.nickname} 年龄：${this.props.age} 身高：${this.props.height}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        About:
        {`昵称：${this.props.nickname} 年龄：${this.props.age} 身高：${this.props.height}`}
      </h2>
    );
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.age}</li>
        <li>{this.props.height}</li>
      </ul>
    );
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{ nickname: "ws", age: 18, height: 1.88 }}>
          <UserHome />
          <UserAbout />
          <UserDetail />
        </UserContext.Provider>
      </div>
    );
  }
}
