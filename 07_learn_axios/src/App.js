import React, { PureComponent } from "react";

import axios from "axios";
import request from './service/request'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // 1.真实拿到数据
    // this.setState({
    //   products: [...this.state.products, ...res],
    // });

    // 2.axios 发送基本的网络请求
    // axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "ws",
    //     age: 18,
    //   },
    //   method: "GET",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "kobe",
    //     age: 40,
    //   },
    //   method: "POST",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // 3.axios发送get/post
    // axios
    //   .get("http://httpbin.org/get", {
    //     params: {
    //       name: "ws",
    //       age: 18,
    //     },
    //   })
    //   .then(console.log);
    // axios
    //   .post("http://httpbin.org/post", { name: "lucy", age: 28 })
    //   .then(console.log);

    // axios.request({});

    // 5. await async
    // try {
    //   const result = await axios.get("http://httpbin.org/get", {
    //     params: {
    //       name: "ws",
    //       age: 18,
    //     },
    //   });

    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }

    // 6.axios.all
    // const request1 = axios({
    //   url: "http://httpbin.org/get",
    //   params: { name: "ws", age: 18 },
    // });

    // const request2 = axios({
    //   url: "/post",
    //   method: "post",
    //   data: { name: "ws", age: 18 },
    // });

    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1);
    //   console.log(res2);
    // }).catch((err) => { });

    // // promise.all
    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise1")
    //   }, 1000)
    // })
    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise2")
    //   }, 3000)
    // })
    // Promise.all([promise1,promise2]).then(res => {
    //   console.log(res) // 等待3秒后打印
    // })

    // // 8. 创建新实例
    // const instance = axios.create({
    //   baseURL:"http://httpbin.org"
    // })

    // 9. 请求和响应拦截
    axios.interceptors.request.use(config => {
      // 1.发送网络请求时，在界面的中间位置显示loading的组件

      // 2. 某一些请求要求用户必须携带token, 如果没有携带，那么跳转到登录页面

      // 3. params/data 序列化的操作
      return config;
    }, err => {

    });

    axios.interceptors.response.use(res => {
      return res.data
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log('请求失败');
            break;
          case 401:
            console.log("未授权访问");
            break;
          default:
            console.log("其他错误信息");
        }
      }
      return err;
    });

    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     name: 'ws'
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })

    request({
      url: "/get",
      params: {
        name: "ws",
        age: 18
      }
    }).then(console.log)

  }

  render() {
    return <div>app</div>;
  }
}
