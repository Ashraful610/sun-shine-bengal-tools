import React, { useState } from 'react'
import './SignIn.css'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '.././Shared/Loading/Loading'
import toast from 'react-hot-toast';

const SignIn = () => {
    //  ----------- user --------------
    const [user, userLoading, error] = useAuthState(auth);
   
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    if(userLoading){
        return <Loading></Loading>
    }
    if(user){
         return  navigate(from, { replace: true });
    }
 
    //  google authentication
    const provider = new GoogleAuthProvider();
    const googleUser = (event) => {
        event.preventDefault()
        signInWithPopup(auth, provider)
        .then((result) => {
            toast.success(`Welcome to our Website ${user?.email}`);
          })
        .catch((error) => {
            toast.error(error?.message);
         });
    }

    // handle user sign  in
    const handleSignIn = event => { 
        event.preventDefault();
        const email = event.target.email?.value
        const password = event.target.password?.value

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            toast.success("Welcome to our Website ");
          })
        .catch((error) => {
            const errorMessage = error.message
            if(errorMessage.includes('user-not-found')){
                toast.error('You have a no account, Please sign up');
            }
            else if(errorMessage.includes('wrong-password')){
                toast.error('Your password is incorrect, give the correct password');
            }
            else{
                toast.error(errorMessage);
            }
         });

    }
    return (
    <div className='w-full min-h-[500px] h-screen lg:p-8 md:p-6 p-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400'>
        <div className='backdrop-blur-sm bg-white/20 lg:flex  w-full min-h-full h-full '>
             {/* ----------- sing in form ----------- */}
             <form onSubmit={handleSignIn} className="sign-in-form lg:w-2/4 w-4/4 lg:h-full h-2/4  p-5">
                        <div className='mx-auto '>
                            {/* ---------- form title */}
                             <h2 className="text-3xl text-center font-semibold font-serif text-white">
                               Sign In
                            </h2>
                            {/* ---------- email input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                <input type="email" placeholder='User email' name='email' className="placeholder:italic placeholder:font-semibold w-full h-10  border-none focus:ring-0"/>
                            </div>
                            {/* ----------password input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-5 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                <input type="password" placeholder='User password' className="w-full h-10 placeholder:italic placeholder:font-semibold border-none focus:ring-0" name='password'/>
                            </div>
                            {/* ------------ submit button ----------- */}
                            <div className='w-2/4 mx-auto'>
                              <input type="submit" value="Sign In" className='btn gradient-btn w-full   '/>
                            </div>

                            {/* ---------- divider ---------- */}
                            <div className="divider text-white ">Or continue with</div>
                            {/* ---------------- google button ---------- */}
                            <button className="btn gradient-btn w-full " onClick={googleUser}>
                                    Google
                            </button>
                        </div>
             </form>               
             <div className="panel right-panel lg:w-2/4 w-4/4 lg:h-full h-2/4">
                    <div className="content">
                        <h2>New here ?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit?</p>
                        <Link to='/signUp' className='gradient-btn btn' >
                            Sign Up
                        </Link>
                    </div>
             </div>
        </div>
     </div>
    );
};

export default SignIn;