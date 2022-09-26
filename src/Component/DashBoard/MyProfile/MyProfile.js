import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyProfile = () => {
    const [ profile , setProfile] = useState()
    const [user , loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://intense-journey-19881.herokuapp.com/user/${user?.email}`,{
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
    },[user])

    const handleEditProfileNavigate = event =>{
        event.preventDefault();
        navigate(`/dashboard/editProfile/${profile?.email}`)
    }

    if(loading){
        return <Loading></Loading>
    }

    return (
    <div className='w-full min-h-[500px] h-fit max-h-[800px] px-5'>
       <div className="backdrop-blur-sm bg-white/10 w-full h-full">
          {/* --------- img div -------------- */}
         <div className='w-full h-2/5 flex justify-center p-10'>
            {
                user?.photoURL ?      
              <img src={user?.photoURL} className='sm:w-[150px] ring-4 ring-green-600 ring-offset-2  sm:h-[150px] w-[150px] h-[150px] rounded-full' alt="" /> :         
              <img src="https://i.ibb.co/pf5nwWk/computer-icons-avatar-male-user-profile-png-favpng-ycgru-Us-QBHht-Gy-GKfw7f-WCtg-N.jpg" className='sm:w-[170px] sm:h-[170px] w-[150px] h-[150px] rounded-full' alt="" />
            }

         </div>
         {/* --------- info div ------------ */}
         <div className='w-full h-3/5 bg-slate-800 xl:p-5 sm:py-5 p-2'>
            <div className='md:flex h-fit'>
               <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-1' >
                          Name : {profile?.name}
                </h2>
                <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-1'>
                           Email : {profile?.email}
                </h2>
            </div>
            <div className='md:flex h-fit'>
                {
                    profile?.education && <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-1' >
                    Education : {profile.education}
                 </h2>
                }
              {
                profile?.address && 
                 <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-1'>
                           Address : {profile.address}
                </h2>
              }
            </div>
            <div className='md:flex h-fit'>
                {
                    profile?.phone && <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-1' >
                    Phone Number : {profile.phone}
                 </h2>
                }
                {
                   profile?.job && <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-1'>
                   Job : {profile.job}
               </h2>
                }
            </div>
            <div className='md:flex h-fit'>
                {
                    profile?.role && <h2 className='text-2xl text-white sm:w-2/4 w-full h-[60px] sm:mx-2 my-2' >  Role : {profile.role}   </h2>
                }
            </div>
            <div className='flex justify-end'>
               <button className='main-btn hover:bg-green-700 text-white w-[200px]' onClick={handleEditProfileNavigate}>
                Edit Profile
                </button>
            </div>
         </div>
       </div>
    </div>
    );
};

export default MyProfile;