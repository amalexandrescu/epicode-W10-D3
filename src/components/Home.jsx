import MovieGallery from "./MovieGallery";
import ContentPresentation from "./ContentPresentation";
const Home = () => {
  return (
    <div>
      {/* <ContentPresentation /> */}
      <MovieGallery title="Trending Now" searchQuery="harry+potter" />
      <MovieGallery
        title="Watch It Again"
        searchQuery="pirates+of+the+caribbean"
      />
      <MovieGallery title="New Releases" searchQuery="lord+of+the+rings" />
    </div>
  );
};

export default Home;
