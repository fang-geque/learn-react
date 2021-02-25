import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      valid: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：
            {/* 受控组件 */}
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              // onChange={(e) => this.handleUsernameChange(e)}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br />
          <label htmlFor="password">
            密码：
            {/* 受控组件 */}
            <input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              // onChange={(e) => this.handlePasswordChange(e)}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br />
          <label htmlFor="valid">
            验证码：
            {/* 受控组件 */}
            <input
              type="text"
              id="valid"
              name="valid"
              value={this.state.valid}
              // onChange={(e) => this.handleValidChange(e)}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password, valid } = this.state;
    console.log(username, password, valid);
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      // 计算属性名
      [event.target.name]: event.target.value,
    });
  }

  // handleUsernameChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ username: event.target.value });
  // }

  // handlePasswordChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ password: event.target.value });
  // }

  // handleValidChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ valid: event.target.value });
  // }
}
