import './App.css';
import React, { useEffect, useState } from 'react';
import searchIcon from './images/search.svg'
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com/?apikey=59f24a14';

function App() {
  // init movies useState with empty array
  const [movies, setMovies] = useState([])
  const [test, setTest] = useState([])
  const [test1, setTest1] = useState([])
  // init search word
  const [searchTearm, setSearchTearm] = useState("")
  
  // call API to get movies
  const searchMovies = (title) => {
    fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search)
        });  
  }

  useEffect (() => {
    searchMovies("Batman")
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand2</h1>
        <div className='search'>
          <input
            placeholder="Search the movie"
            value = {searchTearm}
            onChange={(e) => setSearchTearm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTearm)}
          />
        </div>
          
          {
            movies?.length > 0 ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            ) 
          }
    </div>
  );
}

export default App;


