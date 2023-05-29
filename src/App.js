import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites'



function App() {
  const[movies,setMovies] = useState([]);
  const [serchValue,setSearchValue] = useState([]);

  const getMoviesRequest = async () =>{
    const url = `http://www.omdbapi.com/?s=${serchValue}&apikey=fa597c28`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
    
    
  }

  useEffect(()=>{
    getMoviesRequest(serchValue);
  },[serchValue]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox serchValue={serchValue} setSearchValue={setSearchValue} />
      </div>
    <div className="row">
      <MovieList movies={movies} favouriteComponent={AddFavourites}/>
    </div>         
  </div>
  );
}

export default App;
