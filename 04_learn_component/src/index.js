import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import App from './01_组件的定义方式/App';
// import App from './01_组件的定义方式/02_render函数的返回值';
// import App from './02_组件的生命周期';
// import App from './03_组件间的通信/01_组件间的嵌套';
// import App from './03_组件间的通信/02_父传子的通信-类组件';
// import App from './03_组件间的通信/03_父传子通信-函数组件';
// import App from './03_组件间的通信/04_父传子通信-属性验证';
// import App from './03_组件间的通信/05_子传父-函数传递';
// import App from './04_组件通信的案例';
// import App from './05_antd-年月日级联demo';
// import './04_组件通信的案例/style.css'

// import App from './05_react实现slot'
// import App from './06_跨组件的通信/01_跨组件通信-props'
// import App from './06_跨组件的通信/02_跨组件通信-conteext'
// import App from './06_跨组件的通信/03_跨组件通信-context函数式组件'
// import App from './06_跨组件的通信/04_跨组件通信-多个context'
// import App from './07_setState的使用/01_为什么使用setState'
// import App from './07_setState的使用/02_setState是异步更新'
// import App from './07_setState的使用/03_setState是同步更新'
// import App from './07_setState的使用/04_setState数据的合并'
// import App from './07_setState的使用/05_setState本身的合并'

// import App from './08_React的性能优化/01_列表中keys的作用'
// import App from "./08_React的性能优化/02_组件嵌套的render调用";
// import App from "./08_React的性能优化/03_shouldComponentUpdate";
// import App from "./08_React的性能优化/04_PureComponent.js";
// import App from "./08_React的性能优化/05_memo的使用";

// import App from "./09_前面知识点补充/01_setState不可变的力量";
// import App from "./09_前面知识点补充/02_全局事件传递";

// import App from "./10_受控和非受控组件/01_refs的使用";
// import App from "./10_受控和非受控组件/02_受控组件的基本使用";
// import App from "./10_受控和非受控组件/03_受控组件-select的使用";
// import App from "./10_受控和非受控组件/04_受控组件-多输入";
// import App from "./10_受控和非受控组件/05_非受控组件的使用";

// import App from "./11_高阶组件的使用/01_高阶组件的定义方式";
// import App from "./11_高阶组件的使用/01_高阶组件的定义方式-函数式组件";
// import App from "./11_高阶组件的使用/02_高阶组件的应用-增强props";
// import App from "./11_高阶组件的使用/04_高阶组件的应用-增强props-改进";
// import App from "./11_高阶组件的使用/05_高阶组件应用-登录鉴权操作";
// import App from "./11_高阶组件的使用/07_高阶组件应用-生命周期劫持-增强";

// import App from "./12_组件内容补充/01_ref的转发";
// import App from "./12_组件内容补充/02_portals的使用";
// import App from "./12_组件内容补充/03_fragments的使用";
import App from "./12_组件内容补充/04_strictMode的使用";


ReactDOM.render(
  <React.StrictMode>
    <App name="ws" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
