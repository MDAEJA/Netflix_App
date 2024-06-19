import React, { useContext } from 'react'
import "../component/MovieCardStyle.css"
import { userContext } from '../App'

function MovieCard(props) {

  const {openKey,setOpenKey,videoPlay,setVideoPlay,showData,setShowData} = useContext(userContext)

  const openMovie = (key)=>{
    console.log(key);
    setOpenKey(key);
    setVideoPlay(true);
    console.log(videoPlay);
    setShowData(true);
    
  }
  return (
    <>
     <div className="card-div" onClick={()=>{
      openMovie(props.id);
     }}>
        <img src={props.moviePoster} alt="movie-img"></img>
        <div class="details">
            <h3>{props.movieTitle}</h3>
            <p>{props.movieReleaseDate}</p>
            <p>{props.id}</p>
        </div>
    </div>
    </>
  )
}

export default MovieCard
