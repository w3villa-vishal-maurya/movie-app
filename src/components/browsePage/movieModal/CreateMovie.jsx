import React, { useEffect, useState } from "react";
import { movieURL } from "../../../api/axios";
import { API_KEY_OMBD } from "../../../constants/url";
import { useLocation } from "react-router-dom";
import Ratings from "react-ratings-declarative";
import NavBar from "../navBar/NavBar";
import "./createModal.scss";

const CreateMovie = () => {
  const [movie, setMovie] = useState();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieId = queryParams.get("i");

        const MOVIE_URL = `/?i=${movieId}&apikey=${API_KEY_OMBD}`;
        const response = await movieURL.get(MOVIE_URL);
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavBar />
      {movie && (
        <div className="movie-card">
          <div className="movie-header">
            <img src={movie?.Poster} alt="Movie Poster" className="poster" />
            <div className="movie-info">
              <h1>Capturing Avatar</h1>
              <p className="director">Directed by {movie?.Director}</p>
              <p className="genre">Genre: {movie?.Genre}</p>
              <p className="language">Language: {movie?.Language}</p>
              <p className="country">Country: {movie?.Country}</p>
              <p className="release-date">Released: {movie?.Released}</p>
              <p className="runtime">Runtime: {movie?.Runtime}</p>
              {/* <p className="imdb-rating">IMDb Rating: 8.0</p> */}
              {movie?.imdbRating !== "N/A" ? (
                <Ratings
                  rating={movie?.imdbRating / 2}
                  widgetRatedColors="#FFDB58"
                  widgetEmptyColors="grey"
                  widgetDimensions="16px"
                  widgetSpacings="1px"
                >
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                </Ratings>
              ) : (
                <p className="imdb-rating">IMDb Rating: N/A</p>
              )}
              <p className="imdb-votes">IMDb Votes: {movie?.imdbVotes}</p>
            </div>
          </div>
          <div className="movie-details">
            <p className="plot">
              <strong>Plot:</strong> {movie?.Plot}
            </p>
          </div>
          {/* <a href="#" className="website-link">
            Visit Website
          </a> */}
        </div>
      )}
    </>
  );
};

export default CreateMovie;
