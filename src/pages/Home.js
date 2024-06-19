import React, { useContext, useEffect, useMemo, useState } from 'react'
import Header from '../component/Header'
import { userContext } from '../App'
import Login from './Login'
import MainPage from './MainPage'
import MoviePage from './MoviePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies'
import UpComingMovies from './UpComingMovies'
// import VideoBackGround from '../component/VideoBackGround'
import MoviePlay from './MoviePlay'



function Home() {
  const {showAll,setShowAll,videoPlay,setVideoPlay} = useContext(userContext)

  const {profile} = useContext(userContext);

  const clickHandler = ()=>{
    // setShowAll({...showAll,topMovies :!showAll})
    console.log(showAll)
    toast.success("Movies loaded successfully!");
    setShowAll({...showAll,topMovies : (!showAll.topMovies)})

    console.log(showAll)
  }

  const popularMovieHandler = ()=>{
    setShowAll({...showAll,popularMovies : (!showAll.popularMovies)})
  }

  const topRatedMovieHandler = ()=>{
    setShowAll({...showAll,ratedMovies : (!showAll.ratedMovies)})
  }

  const upComingMovieHandler = ()=>{
    setShowAll({...showAll, comingMovies : (!showAll.comingMovies)})
  }

  




  // 
  return (
    <>
   
    {
      !profile && <>
      <Login></Login>
      alert("first login")
      </>
     
    }
    {
      (profile && 
        <>
        <div>
        <Header></Header>
        <div style={{border:'2px solid white',backgroundColor:"black",color:"white",fontStyle:"italic"}}>
          <MainPage></MainPage>
          <div>
            <div style={{display:"flex",justifyContent:'space-between',padding:"5px 20px",marginBottom:"-15px",marginTop:'10px'}}>
              <h3>Now Playing Movies</h3>
              <span style={{marginRight:"100px",cursor:"pointer"}} onClick={clickHandler}>See More</span>
            </div>
          <MoviePage></MoviePage>
          </div>
{/* popular movies */}

          <div>
            <div style={{display:"flex",justifyContent:'space-between',padding:"5px 20px",marginBottom:"-15px",marginTop:'10px',}}>
              <h3>Popular Movies</h3>
              <span style={{marginRight:"100px",cursor:"pointer"}} onClick={popularMovieHandler}>See More</span>
            </div>
         <PopularMovies></PopularMovies>
          </div>

          {/* top rated movies */}

          <div>
            <div style={{display:"flex",justifyContent:'space-between',padding:"5px 20px",marginBottom:"-15px",marginTop:'10px'}}>
              <h3>Top Rated Movies</h3>
              <span style={{marginRight:"100px",cursor:"pointer"}} onClick={topRatedMovieHandler}>See More</span>
            </div>
        <TopRatedMovies></TopRatedMovies>
          </div>


          {/* upcoming movies */}

          <div>
            <div style={{display:"flex",justifyContent:'space-between',padding:"5px 20px",marginBottom:"-15px",marginTop:'10px'}}>
              <h3>UpComing Movies</h3>
              <span style={{marginRight:"100px",cursor:"pointer"}} onClick={upComingMovieHandler}>See More</span>
            </div>
        <UpComingMovies></UpComingMovies>
          </div>



        </div>



        </div>


        {
          ((videoPlay) && 

            <div style={{position:'absolute',top:"150%",left:"30%",display:"flex",alignItems:"center",justifyContent:"center"}}>
         {/* <VideoBackGround></VideoBackGround> */}
         <button>close</button>
         <MoviePlay/>
            </div>
           
          )

        }
        </>
      )
    }
    </>
  )
}
export default Home
