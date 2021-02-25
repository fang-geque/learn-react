import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["星际穿越", "盗梦空间"],
    };
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {movies.map((item, index) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <button onClick={(e) => this.insertMovies()}>添加按钮</button>
      </div>
    );
  }

  insertMovies() {
    // this.setState({
    //   movies: [...this.state.movies, "大话西游"],
    // });

    this.setState({
      movies: ["大话西游", ...this.state.movies],
    });
  }
}
