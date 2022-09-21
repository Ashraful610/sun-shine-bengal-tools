import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../Hooks/useToken';

const SignUp = () => {
    const [userError , setUserError] = useState({nameError:'',emailError:'',passwordError:''})

    const [user, userLoading, error] = useAuthState(auth);

    const [createUserWithEmailAndPassword,createUser,createLoading,createError] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const [token] = useToken(user || createUser || gUser)
      
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    if(userLoading || createLoading || gloading || updating){
        return <Loading></Loading>
    }

    if(token){
         return  navigate(from, { replace: true });
    } 

     //  handle user sign up
     const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name?.value
        const email = event.target.email?.value
        const password = event.target.password?.value
        if(name === '' && email === '' && password === '') {
           setUserError({nameError:'name is required',emailError:'email is required',passwordError:'password is required'})
        }
        else if (name === ''){
            setUserError({nameError:'name is required'})
        }
        else if (email === ''){
            setUserError({emailError:'email is required'})
        }
        else if (password === ''){
            setUserError({passwordError:'password is required'})
        }
        else{
            await  createUserWithEmailAndPassword(email , password)
            await  updateProfile({displayName:name})
            .then((result) => {
                toast.success('Welcome to our Website')
            })
            .catch((error) => {
                const errorMessage = error.message
                if(errorMessage.includes('email-already-in-use')){
                    toast.error('The email address is already in use by another account. So please sign in or use another email address');
                }
                else if(errorMessage.includes('weak-password')){
                    toast.error('Please give a strong password');
                }
                else{
                    toast.error(errorMessage);
                }
             });
        }
    }
    return (
        <div className='w-full min-h-[500px] h-screen lg:p-8 md:p-6 p-4 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400'>
            <div className='backdrop-blur-sm bg-white/20 w-full h-full lg:flex'>
                 <div className="panel left-panel lg:w-2/4 lg:h-full h-2/4 ">
                       <div className="content">
                            <h2>One of us ?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit?</p>
                            <Link to='/signIn' className='btn gradient-btn'  id='sign-up-btn'>Sign In</Link>
                        </div>
                 </div>
                 {/* ------------------ sign up form ----------------*/}
                 <form onSubmit={handleSignUp} className="sign-up-form p-5 lg:w-2/4 lg:h-full h-2/4  ">
                        <div className='mx-auto '>
                            {/* ---------- form title */}
                             <h2 className="text-3xl text-center font-semibold font-serif text-white">
                               Sign Up
                            </h2>
                             {/* ---------- name input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-3 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                             </svg>
                                    {/*----------- input field -----------  */}
                              <input type="text" placeholder='User name' className="placeholder:italic placeholder:font-semibold w-full h-10  border-none focus:ring-0" name='name'/>
                            </div>
                            {
                                userError.nameError && <p className='text-base text-red-500'>{userError.nameError}</p>
                              }
                            {/* ---------- email input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full my-3 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                    {/*----------- input field -----------  */}
                               <input type="email" placeholder='User email' className="placeholder:italic placeholder:font-semibold w-full h-10  border-none focus:ring-0" name='email'/>
                            </div>
                            {
                                userError.emailError && <p className='text-base text-red-500'>{userError.emailError}</p>
                              }
                            {/* ----------password input div   ---------- */}
                            <div className="input  w-full max-w-xs h-full flex items-center rounded-full  my-3 hover:shadow-xl">
                                {/* ------------- icon ---------- */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                    {/*----------- input field -----------  */}
                                <input type="password" placeholder='User password' className="w-full h-10 placeholder:italic placeholder:font-semibold border-none focus:ring-0" name='password'/>
                            </div>
                            {
                                userError.passwordError && <p className='text-base text-red-500'>{userError.passwordError}</p>
                             }
                            {/* ------------ submit button ----------- */}
                            <div className='w-2/4 mx-auto'>
                              <input type="submit" value="Sign Up" className='w-full btn gradient-btn'/>
                            </div>

                            {/* ------------ divider ----------- */}
                            <div className="divider text-white ">Or continue with</div>

                            {/* ---------------- google button ---------- */}
                            <button className="btn gradient-btn w-full" onClick={()=>signInWithGoogle()}>
                                    Google
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default SignUp