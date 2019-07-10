import React, { Component } from "react";
import axios from "axios";
class Fetch extends Component {
  state = {
    posts: [],
    filterArray: []
  };

  filterRandom = (array, count) => {
    let output = [];
    let reduced = [];
    const min = 1;
    const max = array.length;
    var i;
    for (i = 0; i < count; i++) {
      output[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    reduced = array.filter(filter => output.includes(filter.id));
    this.setState({ posts: reduced });
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.filterRandom(posts, 4);
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3>Custom List</h3>
        <h4>Some heading</h4>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Fetch;
