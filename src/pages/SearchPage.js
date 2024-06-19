import React, { useState } from 'react';
import Header from '../component/Header';
import MovieCard from '../component/MovieCard';
import TopRatedMovies from './TopRatedMovies';
import UpComingMovies from './UpComingMovies';
import PopularMovies from './PopularMovies';

function SearchPage() {
  const [movieName, setMovieName] = useState("");
  const [searchMovieName, setSearchMovieName] = useState([]);
  const[defaultData,setDefaultData] = useState(true);
  const link = "https://image.tmdb.org/t/p/w500";


 

  const getMovie = async (e) => {
    e.preventDefault();
    console.log(movieName);

    if (!movieName) {
      return alert("Please enter a movie name");
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTVhZDk0OTBiZDIyYjYwYTEzYTk1N2RmMzljNzQ5OSIsInN1YiI6IjY2MGU2ZmQxZDZkYmJhMDE3ZDcyZTBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTBWWngfBYyG662i3pzBufI7JrFPitqAzz6kADgRaCw'
      }
    };

    try {
      const response = await fetch(url, options);
      const res = await response.json();
      console.log(res);
      setSearchMovieName(res.results); // Correctly set search results
      setDefaultData(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form className="w-[50%]" onSubmit={getMovie}>
          <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]">
            <input
              className="w-full outline-none rounded-md text-lg"
              onChange={(e) => setMovieName(e.target.value)}
              type="text"
              placeholder="Search Movies...."
            />
            <button className="bg-red-800 text-white rounded-md px-4 py-2">Search</button>
          </div>
        </form>
      </div>

     {(defaultData) && 
     <div>
       <TopRatedMovies/>
       <UpComingMovies/>
       <PopularMovies/>
     </div>
    
     
     }



      
      
      {searchMovieName.length !== 0 && (
        <div style={{textAlign:'center',backgroundColor:"black",marginTop:"30px"}}>
          <h3 style={{fontWeight:"bold" ,paddingTop:"20px",color:"white"}}>{`Search Results for "${movieName}"`}</h3>
          <div className="flex flex-wrap">
            {searchMovieName.map((item, index) => (
              <MovieCard
                key={index}
                moviePoster={link + item.poster_path}
                movieTitle={item.title}
                movieReleaseDate={item.release_date}
                voting={item.vote_average}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
