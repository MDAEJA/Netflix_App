import React, { useContext ,useState} from 'react'
// import { IoIosArrowDropdown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { userContext } from '../App';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

  const showSuccessAlert = () => {
    toast.success("Success! The action was completed successfully.");
  };

  const showErrorAlert = () => {
    toast.error("Error! Something went wrong.");
  };

  const showWarningAlert = () => {
    toast.warn("Warning! First Login In.");
  };
  const[showSearch,setShowSearch] = useState(false);
  const {nameOfUser,profile,setProfile,showAll,setShowAll} = useContext(userContext);
  const nevigate = useNavigate();
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const clickHandler = async()=>{

    try{
      const response = await fetch("https://netflix-project-1scn.onrender.com/userlogout/logout", {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });

       // Check if response is not okay
       if (!response.ok) {
const errorData = await response.json();
console.error("Fetch error:", errorData);
return setAlert({
  open: true,
  message: errorData.message || "Log Out Failed",
  severity: "error",
});
}

const result = await response.json();
      

// Handle successful login
if (result.status) {
    setAlert({
      open: true,
      message: "Log Out Successful",
      severity: "success",
    });
    nevigate('/');
    setProfile(false);
    
    }
    else {
      setAlert({
        open: true,
        message: result.message || "Log Out Failed",
        severity: "error",
      });
    }
  }
  catch (err) {
    console.error("Catch error:", err);
    setAlert({
      open: true,
      message: "An error occurred. Please try again later.",
      severity: "error",
    });
  }
  }

  const searchHandler = ()=>{
    setShowSearch(!showSearch);
    if(showSearch){
      setShowAll({...showAll,searchValue:"Home"});
      nevigate('/search')
    }
    else{
      setShowAll({...showAll,searchValue:"Search Movie"});
      nevigate('/home')
    }
  }
    
  return (
    <>
    <div className='fixed z-10 flex bg-gradient-to-b from-black justify-between items-center px-6 py-3 w-[100%] '>
        <img className='w-20' src='https://tse1.mm.bing.net/th?id=OIP.aWCJ_2NzRkT8ZPgITkzzWwHaEK&pid=Api&rs=1&c=1&qlt=95&h=180' alt='netflix-logo'></img>
        
         {/* <p style={{fontSize:"2rem",fontWeight:"bolder",fontStretch:"expanded",fontFamily:'sans-serif'}}>NETFLIX</p> */}
         {
          (profile) &&  <div className='flex items-center text-white'>
          <IoMdArrowDropdown size={'24px'}/>
          <h1 className='text-lg font-medium ' style={{fontFamily:"sans-serif",fontStyle:"italic",fontWeight:"bold",textTransform:"uppercase",textDecoration:"underline"}}>{nameOfUser}</h1>
          <div className='ml-4'>
            <button className='bg-red-800  text-white px-4 py-2 border-2 rounded' onClick={clickHandler}>Log out</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2 border-2 rounded' onClick={searchHandler}>{showAll.searchValue}</button>
          </div>
        </div>

         }

{
          (!profile) &&  <div className='flex items-center text-white'>
          <IoMdArrowDropdown size={'24px'}/>
          <h1 className='text-lg font-medium ' style={{fontFamily:"sans-serif",fontStyle:"italic",fontWeight:"bold",textTransform:"uppercase",textDecoration:"underline"}}>user</h1>
          <div className='ml-4'>
            <button className='bg-red-800  text-white px-4 py-2 border-2 rounded'>Log in</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2 border-2 rounded'>Search movie</button>
          </div>
        </div>

         }

<Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>

       

    </div>
    </>
  )
}

export default Header
