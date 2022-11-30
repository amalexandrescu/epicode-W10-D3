import { Component } from "react";

class SingleMovie extends Component {
  render() {
    return (
      <div className="col-md-2">
        <img
          className="movie-cover"
          src={this.props.currentMovieObj.Poster}
          alt={this.props.currentMovieObj.Title}
        />
      </div>
    );
  }
}

export default SingleMovie;
