import React, { PureComponent } from "react";

import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

export default class Index extends PureComponent {
  render() {
    return (
      <div>
        <NavBar>
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="11">ccc</a>
        </NavBar>

        <NavBar2
          leftSlot={<span>aaa</span>}
          centerSlot={<strong>bbb</strong>}
          rightSlot="123"
        />
      </div>
    );
  }
}
