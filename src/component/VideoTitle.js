import React, { useContext, useEffect, useState } from 'react'
import "../component/VideoTitleStyle.css"
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { userContext } from '../App';
// import { Button } from '@mui/material'

function VideoTitle() {
  const {movieDetails,setMovieDetails} = useContext(userContext)
  const[movieProfile,setMovieProfile] = useState([]);

  const getData = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
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
      setMovieProfile(res.results);

      if (res.results.length > 0) {
        const random = Math.floor(Math.random() * res.results.length);
        console.log(random);
        const movieName = res.results[random];
        console.log(movieName);

        setMovieDetails({
          overview: movieName.overview,
          id: movieName.id,
          title: movieName.title
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(movieDetails);
  }, [movieDetails]);
 

  
  return (
    <>
    <div className='w-screen aspect-video absolute text-white  pt-[18%] p-12'>
        <h1 className='text-3xl font-bold bg-black- py-2'>{movieDetails.title}</h1>
        <p style={{width:"55%"}}>{movieDetails.overview}</p>
        <div className='flex gap-3 mt-8'>
          <button className='flex items-center gap-2 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'><FaPlay/><span>Play</span></button>
          <button  className='flex items-center gap-2 px-6 py-2 bg-gray-500 bg-opacity-1 text-black rounded-md '><IoIosInformationCircle></IoIosInformationCircle><span>Watch More</span></button>
        </div>
    </div>
    </>
  )
}

export default VideoTitle
