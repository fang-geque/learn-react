import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return <div>App : {this.props.name} </div>;
  }
}

function enhanceComponent(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props}></WrappedComponent>;
  }

  NewComponent.displayName = "kobe";
  return NewComponent;
}

const EnhanceComponent = enhanceComponent(App);

export default EnhanceComponent;
