import { Component } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
class SingleMovie extends Component {
  render() {
    return (
      <div className="col-md-2">
        <img
          className="movie-cover"
          src={this.props.currentMovieObj.Poster}
          alt={this.props.currentMovieObj.Title}
        />
        <div className="text-center">
          <Link to={"/details/" + this.props.currentMovieObj.imdbID}>
            <Badge variant="info" className="mx-2 ">
              Details
            </Badge>
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
