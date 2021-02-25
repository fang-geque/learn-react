import React, { Component } from "react";

// header
function Header() {
  return <h2>我是Header组件</h2>;
}

// ProductList
function ProductList() {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
    </ul>
  );
}

// Banner
function Banner() {
  return <h2>我是Main组件</h2>;
}

function Main() {
  return (
    <div>
      <Banner></Banner>
      <ProductList></ProductList>
    </div>
  );
}

// footer
function Footer() {
  return <h2>我是Footer组件</h2>;
}

export default class App extends Component {
  
  main2(){
    return (
      <div>
        <h2>main2</h2>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        {this.main2()}
        <Footer></Footer>
      </div>
    );
  }
}
