import React, { PureComponent } from "react";

// 创建context对象
const UserContext = React.createContext({
  nickname: "ws",
  level: -1,
});

const ThemeContext = React.createContext({
  color: "black",
});

function ProfileHeader(props) {
  return (
    <UserContext.Consumer>
      {(value) => (
        <ThemeContext.Consumer>
          {(theme) => (
            <div>
              <h2 style={{ color: theme.color }}>用户昵称：{value.nickname}</h2>
              <h2>用户等级：{value.level}</h2>
              <h2>颜色：{theme.color}</h2>
            </div>
          )}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader></ProfileHeader>
      <ul>
        <li>设置*1</li>
        <li>设置*2</li>
        <li>设置*3</li>
        <li>设置*4</li>
      </ul>
    </div>
  );
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "ws",
      level: 99,
    };
  }

  render() {
    // const { nickname, level } = this.state;

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Profile></Profile>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
