import React, { useContext, useEffect, useState } from 'react';
import "../component/VideoBackGroundStyle.css";
import { userContext } from '../App';

function MoviePlay() {
  const { openKey, setOpenKey,showData,setShowData } = useContext(userContext);
  const [videoInfo, setVideoInfo] = useState({
    key: ""
  });
 

  const closeHandler = ()=>{
setShowData(false)
  }
  

  const moviesInfo = async () => {

    
   

    const url = `https://api.themoviedb.org/3/movie/${openKey}/videos?language=en-US`;
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
  }, [openKey]);

  return (

    <>
    {
      (showData && 
<div className=' aspect-video'>
      
      {videoInfo.key && (
        <iframe
          className='w-[200%] aspect-video'
          src={`https://www.youtube.com/embed/${videoInfo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <button onClick={closeHandler} style={{position:"absolute",top:"0",backgroundColor:"white",color:"red",padding:"10px 20px",left:"170%",cursor:'pointer'}}>X</button>
    </div>
      )
    }
    </>

    
  );
}

export default MoviePlay;
