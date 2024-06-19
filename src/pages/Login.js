import React, { useContext, useState } from 'react'
import Header from '../component/Header'
import "../pages/LoginStyle.css"
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { userContext } from '../App';


function Login() {
    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const[login,setLogin] = useState(true);
    const {nameOfUser,setNameOfUser,profile,setProfile} = useContext(userContext);
    // const[displayButton,setDisplayButton] = useState("signUp");

    const[signUp,setSignUp] = useState({
        userName : "",
        email : "",
        password : ""
    })

    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

    const handleClose = () => {
        setAlert({ ...alert, open: false });
      };

    const loginPage = ()=>{
        setLogin(!login);
        
    }

    const createAccount = async(e)=>{
        try{
            e.preventDefault();

            // all fields checking

            if(signUp.userName === "" ||
                signUp.email === "" ||
                signUp.password === ""
            ){
                return setAlert({
                  open: true,
                  message: "All fields are required",
                  severity: "error",
                });
              }

              //password checking

      const uppercase = /[A-Z]/.test(signUp.password);
      const lowercase = /[a-z]/.test(signUp.password);
      const specialchar = /[!@#$%^&*()?.,<>]/.test(signUp.password);
      const number = /[0-9]/.test(signUp.password);
  
      if (!uppercase || !lowercase || !specialchar || !number) {
        return setAlert({
          open: true,
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
          severity: "error",
        });
      }

      //email checking

      if (!signUp.email.includes("@")) {
        return setAlert({
          open: true,
          message: "Incorrect email",
          severity: "error",
        });
      }

   console.log(signUp); 

   // fecthing the api 
   const response = await fetch("https://netflix-project-1scn.onrender.com/create/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUp),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Fetch error:", errorData);
    return setAlert({
      open: true,
      message: errorData.message || "Sign Up Failed",
      severity: "error",
    });
  }

  const result = await response.json();
  console.log("Sign up success:", result);

  setAlert({ open: true, message: "Sign Up Successful", severity: "success" });
setTimeout(()=>{
    setLogin(!login); 
},5000)
     
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
    const loginAccount = async(e)=>{
        try{
            e.preventDefault();
            const userData = {
                email : signUp.email,
                password : signUp.password
            }
            console.log(userData);
            //checking all fields

            if(userData.email === "" || userData.password === ""){
                return setAlert({
                    open: true,
                    message: "All fields are required",
                    severity: "error",
                  });
          
            }

            // fetching the api 
            const response = await fetch("https://netflix-project-1scn.onrender.com/user/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(userData),
              });

               // Check if response is not okay
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Fetch error:", errorData);
        return setAlert({
          open: true,
          message: errorData.message || "Sign In Failed",
          severity: "error",
        });
      }

      const result = await response.json();
      

        // Handle successful login
        if (result.status) {
            setAlert({
              open: true,
              message: "Sign In Successful",
              severity: "success",
            });

            setNameOfUser(userData.email.split('@').at(0).split("").splice(0,5))
           console.log(nameOfUser);
          
           setTimeout(()=>{
            setProfile(true);
             
           },3000)

           nevigate('/home');
            
          } else {
            setAlert({
              open: true,
              message: result.message || "Sign In Failed",
              severity: "error",
            });
          }


            // console.log(signUp); 
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
  return (
    <>
    <div>
        <Header></Header>
        <div style={{position:"absolute"}}> 
            <img className='w-full h-full' src='https://wallpapers.com/images/file/netflix-background-gs7hjuwvv2g0e9fj.jpg'alt='img'></img>
        </div>

        <div className='login_div'>
        <form action='' onSubmit={(e)=>{
            if(!login){
              createAccount(e);  
            }
            else{
                loginAccount(e)
            }
        }}>
            {
                (!login) && <div class="mb-4">
                {/* <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label> */}
                <input type="text" id="email" class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter Name" required onChange={(e)=>{setSignUp({...signUp,userName:e.target.value})}}></input>
            </div>

            }
        
            <div class="mb-4">
                
                {/* <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label> */}
                <input type="email" id="email" class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter your email" required onChange={(e)=>{setSignUp({...signUp,email:e.target.value})}}></input>
            </div>
            <div class="mb-4 text-center">
                {/* <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label> */}
                <input type="password" id="password" class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Enter your password" required onChange={(e)=>{setSignUp({...signUp,password:e.target.value})}}></input>
            </div>
            {
                (!login) &&  <p style={{color:"whitesmoke",fontSize:'16px',textAlign:"center",cursor:"pointer"}}>Already Have An Account  <span style={{color:'darkcyan',textAlign:"center" }} onClick={loginPage}>login</span></p>
            }
           {
            (login) &&  <p style={{color:"whitesmoke",fontSize:'16px',textAlign:"center",cursor:"pointer"}}>Welcome and Enjoy Netflix  <span style={{color:'darkcyan',textAlign:"center"}} onClick={loginPage}>Sign Up</span></p>
           }

          {
            (login) &&  <button  class="w-full py-3 mt-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
           Login
        </button>
          }

            {
            (!login) &&  <button  onClick={createAccount} class="w-full py-3 mt-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
           Sign Up
        </button>
          }


           
        </form>

        <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>

        </div>

       

      
        
    </div>
    </>
    
  )
}

export default Login
