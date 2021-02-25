import React, { Component } from "react";

import TabControl from "./TabControl";
import "./style.css";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currTitle: "流行",
      titles: ["流行", "新款", "精选"],
    };
  }

  itemClick(index) {
    this.setState({
      currTitle: this.state.titles[index],
    });
  }

  render() {
    const { currTitle,titles } = this.state;
    return (
      <div>
        <TabControl
          iClick={(index) => this.itemClick(index)}
          titles={titles}
        ></TabControl>
        <h2>{currTitle}</h2>
      </div>
    );
  }
}
