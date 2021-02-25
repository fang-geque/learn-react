import React, { Component } from "react";

// header
function Header() {
  console.log("Header被调用");
  return <h2>我是Header组件</h2>;
}

// ProductList
function ProductList() {
  console.log("ProductList render被调用");
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
    </ul>
  );
}

// Banner
class Banner extends Component {
  render() {
    console.log("banner render函数被调用");
    return <h2>我是Banner组件</h2>;
  }
}

class Main extends Component {
  render() {
    console.log("Main render函数被调用");
    return (
      <div>
        <Banner></Banner>
        <ProductList></ProductList>
      </div>
    );
  }
}

// footer
function Footer() {
  console.log("Footer render函数被调用");
  return <h2>我是Footer组件</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
