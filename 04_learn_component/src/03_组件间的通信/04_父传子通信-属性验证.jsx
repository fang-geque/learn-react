import React, { Component } from "react";
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height } = props;
  const { names } = props;

  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {names?.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names:PropTypes.array
}

ChildCpn.defaultProps = {
  name:'why'
}


export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="ws" age="18" height={1.88} names={[1,2,3]} />
        <ChildCpn name="kobe" age="40" height={1.98} />
      </div>
    );
  }
}
