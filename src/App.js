import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Component } from "react";
import CustomNavbar from "./components/CustomNavbar";
import { Container } from "react-bootstrap";
import ContentPresentation from "./components/ContentPresentation";
import MovieGallery from "./components/MovieGallery";
import MyFoter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import Home from "./components/Home";
import { useState } from "react";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  // state = {
  //   movieTitiles: [
  //     "harry+potter",
  //     "pirates+of+the+caribbean",
  //     "lord+of+the+rings",
  //   ],
  // };

  // const [movieTitles, setMovieTitles] = useState([
  //   "harry+potter",
  //   "pirates+of+the+caribbean",
  //   "lord+of+the+rings",
  // ]);

  // render() {
  return (
    <BrowserRouter>
      <div>
        <CustomNavbar />
        <ContentPresentation />
        <Container fluid>
          <Routes>
            {/* <Route element={<ContentPresentation />} path="/" /> */}
            <Route element={<Home />} path="/" />
            <Route
              element={
                <TVShows
                  searchedMovies={[
                    "harry+potter",
                    "pirates+of+the+caribbean",
                    "lord+of+the+rings",
                  ]}
                />
              }
              path="/tv-shows"
            />
            <Route element={<MovieDetails />} path="/details/:movieId" />
          </Routes>

          {/* <ContentPresentation /> */}
          {/* <MovieGallery title="Trending Now" searchQuery="harry+potter" />
          <MovieGallery
            title="Watch It Again"
            searchQuery="pirates+of+the+caribbean"
          />
          <MovieGallery title="New Releases" searchQuery="lord+of+the+rings" /> */}
        </Container>
        <MyFoter />
      </div>
    </BrowserRouter>
  );
  // }
};

export default App;
