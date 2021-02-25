import React, { PureComponent } from "react";

import "./style.css";

export default class NavBar2 extends PureComponent {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    console.log("props", this.props);

    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">{leftSlot}</div>
        <div className="nav-item nav-center">{centerSlot}</div>
        <div className="nav-item nav-right">{rightSlot}</div>
      </div>
    );
  }
}
