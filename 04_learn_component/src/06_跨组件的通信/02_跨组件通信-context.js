import React, { PureComponent } from "react";

// 创建context对象
const UserContext = React.createContext({
  nickname: "ws",
  level: -1,
});

class ProfileHeader extends PureComponent {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>用户昵称：{this.context.nickname}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    );
  }
}

ProfileHeader.contextType = UserContext;

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
          <Profile></Profile>
        </UserContext.Provider>
      </div>
    );
  }
}
