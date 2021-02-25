import React, { PureComponent } from 'react'

import './style.css'

export default class NavBar extends PureComponent {
  render() {
    console.log('props',this.props)

    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">
          {this.props.children[0]}
        </div>
        <div className="nav-item nav-center">
        {this.props.children[1]}
        </div>
        <div className="nav-item nav-right">
        {this.props.children[2]}
        </div>
      </div>
    )
  }
}
