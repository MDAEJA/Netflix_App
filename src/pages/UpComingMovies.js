import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../component/MovieCard'
import { userContext } from '../App';

function UpComingMovies() {
    const[comingMovies,setComingMovies] = useState([]);
    const link = "https://image.tmdb.org/t/p/w500";
    const {showAll} = useContext(userContext);

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTVhZDk0OTBiZDIyYjYwYTEzYTk1N2RmMzljNzQ5OSIsInN1YiI6IjY2MGU2ZmQxZDZkYmJhMDE3ZDcyZTBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTBWWngfBYyG662i3pzBufI7JrFPitqAzz6kADgRaCw'
  }
};

const moviesComing =async ()=>{
    try{
        const response = await fetch(url,options);
        const res = await response.json();
        setComingMovies(res.results);
    }
    catch(err){
        console.log(err);
    }
}
useEffect(()=>{
    moviesComing();
},[])
  return (
    <div style={{ display: "flex", flexWrap: "wrap",textAlign:"center" }}>
    {(showAll.comingMovies ? comingMovies : comingMovies.slice(0, 5)).map((item, index) => (
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

export default UpComingMovies
