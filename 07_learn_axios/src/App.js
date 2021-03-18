import React, { PureComponent } from "react";

import axios from "axios";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // 拿到数据
    // this.setState({
    //   products: [...this.state.products, ...res],
    // });

    // 1.axios 发送基本的网络请求
    axios({
      url: "http://httpbin.org/get",
      params: {
        name: "ws",
        age: 18,
      },
      method: "GET",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    axios({
      url: "http://httpbin.org/post",
      data: {
        name: "kobe",
        age: 40,
      },
      method: "POST",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://httpbin.org/get", {
        params: {
          name: "ws",
          age: 18,
        },
      })
      .then(console.log);
    axios
      .post("http://httpbin.org/post", { name: "lucy", age: 28 })
      .then(console.log);

    axios.request({});

    // await async
    try {
      const result = await axios.get("http://httpbin.org/get", {
        params: {
          name: "ws",
          age: 18,
        },
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return <div>app</div>;
  }
}
