import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { userContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MoviesList() {
  const [movieDetails, setMoviesDetails] = useState([]);
  const {showAll,setShowAll,} = useContext(userContext)

  const link = "https://image.tmdb.org/t/p/w500";

  // getting upcoming movies details
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTVhZDk0OTBiZDIyYjYwYTEzYTk1N2RmMzljNzQ5OSIsInN1YiI6IjY2MGU2ZmQxZDZkYmJhMDE3ZDcyZTBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTBWWngfBYyG662i3pzBufI7JrFPitqAzz6kADgRaCw'
    }
  };

  const upComingMovies = async () => {
    try{
      const response = await fetch(url, options);
      const res = await response.json();
      setMoviesDetails(res.results);
      toast.success("Data loaded successfully!");
    }
    catch(error){
      toast.error("Failed to load data. Please try again later.");
    }
  };

  useEffect(() => {
    upComingMovies();
  }, []);

  // const openmovie = (key)=>{
  //   console.log("hi")
// setVideoPlay(true);
// setOpenKey(key);
  // }

  return (

    <div>
    
    <div style={{ display: "flex", flexWrap: "wrap",textAlign:"center" }} >
        {(showAll.topMovies ? movieDetails : movieDetails.slice(0, 5)).map((item, index) => (
          <MovieCard 
            key={item.id}
            moviePoster={link + item.poster_path}
            movieTitle={item.title}
            movieReleaseDate={item.release_date}
            id={item.id}
            // onClick={() => openmovie(item.id)}
            />
        ))}
      </div>
      </div>
  );
}

export default MoviesList;