import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    // 引用类型
    this.state = {
      friends: [
        { name: "lilei", age: 20 },
        { name: "lily", age: 25 },
        { name: "lucy", age: 22 },
      ],
    };
  }

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    const { friends } = this.state;
    return (
      <div>
        <h2>好友列表：</h2>
        <ul>
          {friends.map((item, index) => {
            return (
              <li key={item.name}>
                姓名：{item.name} 年龄：{item.age}
                <button
                  style={{ marginLeft: "8px" }}
                  onClick={(e) => this.incrementAge(index)}
                >
                  age+1
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.insertData()}>添加数据</button>
      </div>
    );
  }

  insertData() {
    console.log("添加数据");
    const newData = { name: "tom", age: 30 };

    // 1.在开发中不要这样来做(shouldComponentUpdate返回false,组件不刷新)
    // this.state.friends.push(newData);
    // this.setState({
    //   friends: this.state.friends,
    // });

    // 2. 推荐做法
    this.setState({
      friends: [...this.state.friends, newData],
    });
  }

  incrementAge(index) {
    const newFriend = [...this.state.friends];
    newFriend[index].age += 1;
    this.setState({ friends: newFriend });
  }
}
