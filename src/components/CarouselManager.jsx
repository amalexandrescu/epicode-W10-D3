import { Component } from "react";
import { Carousel, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class CarouselManager extends Component {
  state = {
    searchResponse: [],
    moviesCounter: 0,
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=27737b2a&s=${this.props.searchQuery}`
      );
      if (response.ok) {
        let data = await response.json();
        if (data.Search.length > 6) {
          this.setState({
            searchResponse: [...data.Search, ...data.Search],
            moviesCounter: Math.floor(data.Search.length / 6) + 1,
          });
        } else {
          this.setState({ searchResponse: data.Search });
        }
      } else {
        console.log("An error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const template = [];
    if (this.state.moviesCounter === 0) {
      template.push(
        <Carousel.Item key={0}>
          <div className="movie-row">
            <Row>
              {this.state.searchResponse.map((movie) => {
                return (
                  <SingleMovie key={movie.imdbID} currentMovieObj={movie} />
                );
              })}
            </Row>
          </div>
        </Carousel.Item>
      );
    } else {
      for (let i = 0; i < this.state.moviesCounter; i++) {
        template.push(
          <Carousel.Item key={i}>
            <div className="movie-row">
              <Row>
                {this.state.searchResponse
                  .slice(i * 6, (i + 1) * 6)
                  .map((movie) => {
                    return (
                      <SingleMovie key={movie.imdbID} currentMovieObj={movie} />
                    );
                  })}
              </Row>
            </div>
          </Carousel.Item>
        );
      }
    }

    return <Carousel indicators={false}>{template}</Carousel>;
  }
}

export default CarouselManager;
