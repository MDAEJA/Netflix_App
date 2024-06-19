import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../component/MovieCard'
import { userContext } from '../App';

function TopRatedMovies() {

    const[topRatedMovies,setTopRatedMovies] = useState([]);
    
    const {showAll} = useContext(userContext);

    const link = "https://image.tmdb.org/t/p/w500";

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTVhZDk0OTBiZDIyYjYwYTEzYTk1N2RmMzljNzQ5OSIsInN1YiI6IjY2MGU2ZmQxZDZkYmJhMDE3ZDcyZTBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTBWWngfBYyG662i3pzBufI7JrFPitqAzz6kADgRaCw'
  }
};

const topRated = async()=>{
    try{
        const response = await fetch(url,options);
        const res = await response.json();
        console.log(res)
        setTopRatedMovies(res.results);
        console.log(topRatedMovies)
    }
    catch(err){
        console.log(err);
    }
   
};

useEffect(()=>{
    topRated()
},[])

  return (
    
    <div style={{ display: "flex", flexWrap: "wrap",textAlign:"center" }}>
        {(showAll.ratedMovies ? topRatedMovies : topRatedMovies.slice(0, 5)).map((item, index) => (
          <MovieCard
            key={item.id}
            moviePoster={link + item.poster_path}
            movieTitle={item.title}
            movieReleaseDate={item.release_date}
            id={item.id}
          />
        ))}
      </div>
  )
}

export default TopRatedMovies

