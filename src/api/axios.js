import axios from "axios";

const authURL = axios.create({
  baseURL: "https://reqres.in",
  // other configuration for the first API
});

const movieURL = axios.create({
  baseURL: "https://www.omdbapi.com",
  headers: {
    "Content-type": "application/json",
  },
  // https://www.omdbapi.com/?apikey=d9c1586
  // other configuration for the second API
});

const HTTP = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

export { authURL, movieURL, HTTP };
