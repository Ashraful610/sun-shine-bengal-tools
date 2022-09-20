import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [ profile , setProfile] = useState({})
    const {email ,role} = profile
    const [user , loading, error] = useAuthState(auth)

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`,{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => {
            if(res.statusCode === 401 || res.statusCode === 403) {
                 navigate('/home')
            }
             return res.json()})
        .then(data => setProfile(data))
    },[])


    const navigate = useNavigate()
    const handleEditProfileNavigate = event =>{
        event.preventDefault();
        navigate(`/dashboard/editProfile/${profile?.email}`)
    }
    return (
    <div className='w-full min-h-[500px] h-fit max-h-[800px] px-5'>
       <div className="backdrop-blur-sm bg-white/20 w-full h-full">
          {/* --------- img div -------------- */}
         <div className='w-full h-2/5 flex justify-center p-10'>
                    <img src="https://i.ibb.co/X7B385c/image.png" className='sm:w-[170px] sm:h-[170px] w-[150px] h-[150px] rounded-full' alt="" />
         </div>
         {/* --------- info div ------------ */}
         <div className='w-full h-3/5 bg-white/40 xl:p-5 sm:py-5 p-2'>
            <div className='md:flex h-fit'>
               <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2' >
                          Name : {profile?.name}
                </h2>
                <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2'>
                           Email : {profile?.email}
                </h2>
            </div>
            <div className='md:flex h-fit'>
                <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2' >
                          {/* Education : {displayName} */}
                 </h2>
                <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2'>
                           {/* Address : {email} */}
                </h2>
            </div>
            <div className='md:flex h-fit'>
                <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2' >
                   {/* Phone Number : {displayName} */}
                </h2>
                <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2'>
                    {/* Job : {email} */}
                </h2>
            </div>
            <div className='flex justify-end'>
               <button className='gradient-btn text-white w-[200px]' onClick={handleEditProfileNavigate}>
                Edit Profile
                </button>
            </div>
         </div>
       </div>
    </div>
    );
};

export default MyProfile;