// import logo from './logo.svg';
import './App.css';

import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './pages/Login';
import { createContext, useState } from 'react';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage'
import MovieDialog from './component/MovieDialog';
export const userContext = createContext();


function App() {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Login></Login>
    },
    {
       path : '/home',
       element : <Home></Home>
    },
    {
      path : '/search',
      element : <SearchPage></SearchPage>
    }
  ]);

  const[nameOfUser,setNameOfUser] = useState("Login");
  const[showData,setShowData] = useState(false)
  const[profile,setProfile] = useState(false);
  const[videoPlay,setVideoPlay] = useState(false);
  const[movieUrl,setMovieUrl] = useState("https://image.tmdb.org/t/p/w500");
  const[showAll,setShowAll] = useState({
    topMovies : false,
    popularMovies : false,
    ratedMovies : false,
    comingMovies : false,
    search : false,
    searchValue : "Search Movie",
  });

  const[movieDetails,setMovieDetails] = useState({
    overview : "",
    title : "",
    id : ""

  })

  const[openKey,setOpenKey] = useState(0);


  
  return (
    <>
    {/* <userContext.Provider value={{nameOfUser,setNameOfUser}}> */}

    {/* </userContext.Provider> */}
    <div>
    <userContext.Provider value={{nameOfUser,setNameOfUser,profile,setProfile,movieUrl,setMovieUrl,showAll,setShowAll,movieDetails,setMovieDetails,videoPlay,setVideoPlay,openKey,setOpenKey,showData,setShowData}}>
      <RouterProvider router={appRouter}></RouterProvider>
      
      </userContext.Provider>
    </div>
    <div>
      {/* <MovieDialog/> */}
    </div>
    </>
  );
}

export default App;
