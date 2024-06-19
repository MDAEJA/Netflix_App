import React from 'react'
import VideoTitle from '../component/VideoTitle'
import VideoBackGround from '../component/VideoBackGround'

function MainPage() {

  

  
  

//   const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTVhZDk0OTBiZDIyYjYwYTEzYTk1N2RmMzljNzQ5OSIsInN1YiI6IjY2MGU2ZmQxZDZkYmJhMDE3ZDcyZTBkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTBWWngfBYyG662i3pzBufI7JrFPitqAzz6kADgRaCw'
//   }
// };




  return (
      <>
      <div>
       <VideoTitle ></VideoTitle>
       <VideoBackGround></VideoBackGround>
      </div>
      </>
      
  )
}

export default MainPage
