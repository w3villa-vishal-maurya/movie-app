import React, { useEffect, useState } from "react";
import {movieURL } from "../../../api/axios";
import "./featureModal.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { API_KEY_OMBD } from "../../../constants/url";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import NavBar from "../navBar/NavBar";

export default function FeatureModal() {
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState();
  const [pageCount, setPageCount] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchMediaDetailsById = async () => {
      try {
        const param1 = queryParams.get("search");
        const param2 = queryParams.get("page");
        setPage(param2);

        const SEARCH_URL = `/?s=${param1}&page=${page}&apikey=${API_KEY_OMBD}`;
        const response = await movieURL.get(SEARCH_URL);

        setSearchData(response?.data?.Search);
        setPageCount(Math.ceil(response?.data?.totalResults / 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMediaDetailsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  const handleShow = async (e) => {
    try {
      const movieId = e.target.parentNode.parentNode?.id;

      navigate(`/movie?i=${movieId}`);
    } catch (err) {}
  };

  return (
    <>
      <NavBar/>
      <br />
      <br />
      <br />
      <br />
      <div className="all-movies">
        {searchData && searchData.length > 0 ? (
          searchData.map((movie) => {
            return (
              <div
                className="movies"
                id={movie.imdbID}
                key={movie.imdbID}
                onClick={(e) => handleShow(e)}
              >
                <div className="movie">
                  {movie.Poster && <img src={movie.Poster} alt="" />}
                  <h2>{movie.Title}</h2>
                  <span>Movie Year: {movie.Year}</span>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Oops! Movie not found!</h1>
        )}
      </div>

      <div id="container">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={Math.ceil(pageCount)}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
