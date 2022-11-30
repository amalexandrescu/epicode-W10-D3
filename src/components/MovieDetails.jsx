import { useNavigate, useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);
  console.log("Movie Id is", params.movieId);

  const navigate = useNavigate();

  const [singleMovie, setSingleMovie] = useState([]);

  const fetchSingleMovie = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=27737b2a&i=${params.movieId}`
      );
      if (response.ok) {
        let result = await response.json();
        setSingleMovie(result);
      } else {
        console.log("An error occured while fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  return (
    <Card className="customCard text-center mx-auto">
      <Card.Img variant="top" src={singleMovie.Poster} />
      <Card.Body>
        <Card.Title>{singleMovie.Title}</Card.Title>
        <Card.Text>{singleMovie.Plot}</Card.Text>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
