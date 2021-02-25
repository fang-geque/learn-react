import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class TabControl extends PureComponent {
  static propTypes = {
    titles: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };
  }

  itemClick(index) {
    this.setState({
      current: index,
    });

    const { iClick } = this.props;
    iClick(index);
  }

  renderTitles() {
    const { titles } = this.props;
    const { current } = this.state;
    console.log(titles);
    console.log(current);
    return titles.map((item, index) => {
      return (
        <div
          className={"tab-item " + (current === index ? "active" : "")}
          key={index}
          onClick={(e) => this.itemClick(index)}
        >
          <span>{item}</span>
        </div>
      );
    });
  }

  render() {
    // const { titles } = this.props;
    // const { current } = this.state;

    return <div className="tab-control">{this.renderTitles()}</div>;
  }
}
