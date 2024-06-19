import React, { useContext, useEffect, useState } from 'react';
import "../component/VideoBackGroundStyle.css";
import { userContext } from '../App';

function VideoBackGround() {
  const { movieDetails, setMovieDetails } = useContext(userContext);
  const [videoInfo, setVideoInfo] = useState({
    key: ""
  });

  const moviesInfo = async () => {
    if (!movieDetails.id) return;

    const url = `https://api.themoviedb.org/3/movie/${movieDetails.id}/videos?language=en-US`;
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
      if (res.results.length > 0) {
        const getkey = res.results[0].key;
        console.log(getkey);
        setVideoInfo({ key: getkey });
      } else {
        console.log("No video key found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    moviesInfo();
  }, [movieDetails.id]);

  return (
    <div className='w-screen aspect-video'>
      {videoInfo.key && (
        <iframe
          className='w-screen aspect-video'
          src={`https://www.youtube.com/embed/${videoInfo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default VideoBackGround;
