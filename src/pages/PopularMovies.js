import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../component/MovieCard'
import { userContext } from '../App';

function PopularMovies() {

    const link = "https://image.tmdb.org/t/p/w500";

    const[popularMovie,setPopularMovies] = useState([]);
    const {showAll} = useContext(userContext);

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTVhZDk0OTBiZDIyYjYwYTEzYTk1N2RmMzljNzQ5OSIsInN1YiI6IjY2MGU2ZmQxZDZkYmJhMDE3ZDcyZTBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTBWWngfBYyG662i3pzBufI7JrFPitqAzz6kADgRaCw'
  }
};

const moviesPopular = async()=>{
    try{
        const response = await fetch(url,options);
        const res = await response.json();
        setPopularMovies(res.results)
    }
    catch(error){
        console.log(error)
    }
    
}

useEffect(()=>{
    moviesPopular()
},[])


  return (
    <div>
    
    <div style={{ display: "flex", flexWrap: "wrap",textAlign:"center" }}>
        {(showAll.popularMovies ? popularMovie : popularMovie.slice(0, 5)).map((item, index) => (
          <MovieCard
            key={index}
            moviePoster={link + item.poster_path}
            movieTitle={item.title}
            movieReleaseDate={item.release_date}
            id={item.id}
          />
        ))}
      </div>

      

      </div>
  )
}

export default PopularMovies
