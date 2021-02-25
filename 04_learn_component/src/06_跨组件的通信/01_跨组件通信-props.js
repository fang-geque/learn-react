import React, { PureComponent } from "react";

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称： {props.nickname}</h2>
      <h2>用户等级： {props.level}</h2>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader
        // nickname={props.nickname}
        // level={props.level}
        {...props}
      ></ProfileHeader>
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
        <Profile {...this.state}></Profile>
      </div>
    );
  }
}
