import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditProfile = () => {
  const email = useParams()
  const [user , setUser] = useState({})
  const navigate = useNavigate()
   

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${email.email}`)
        .then(res => res.json())
        .then(data =>setUser(data))
     },[email])

    const handleUpdateProfile = event => {
        event.preventDefault();
        const name = event.target.name?.value
        const email = event.target.email?.value
        const address = event.target.address?.value
        const phone = event.target.number?.value
        const education = event.target.education?.value
        const job = event.target.job?.value

        if(name && address  && phone  && job  && education && email ){
            const profileUpdate = {
                name:name,
                email:email,
                education:education,
                address:address,
                phone:phone,
                job:job
              }
              fetch(`http://localhost:5000/user/${email}`,{
                method:'PUT',
                body: JSON.stringify(profileUpdate),
                  headers:{'Content-type': 'application/json; charset=UTF-8'}
              })
              .then(res => res.json())
              .then(result => {
                 if(result.modifiedCount > 0){
                    toast.success('Successfully update profile')
                     navigate('/dashboard')
                 }
              })
            }  
    }
    return (
    <div>
      <form onSubmit={handleUpdateProfile} className=' w-full min-h-[500px] h-fit px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/20'>
          <div className=" w-full ">
              <div className="grid grid-cols-6 gap-6">
                  {/* --------------  name --------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                       <label htmlFor="first-name" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" name="name" placeholder='name'
                        className="common-input-field" defaultValue={user?.name}/>
                  </div>
                  {/* -------------- email -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-white">Email</label>
                       <input type="email" name="email" placeholder='email'
                          className="common-input-field"  defaultValue={user?.email} disabled/>
                  </div>
                  {/* -------------- Education  ----------------*/}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white">Education</label>
                      <input type="text" name="education" placeholder='education'
                        className="common-input-field"/>
                  </div>
                  {/* ------------------- Address -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-white">Address</label>
                      <input type="text" name="address" placeholder='address'
                        className="common-input-field"/>
                  </div>
                   {/* --------------- phone number --------------------*/}
                   <div className='col-span-6 sm:col-span-3'>
                       <label className="block text-sm font-medium text-white">
                          Phone number
                       </label>
                       <input type="number" name="number" placeholder='phone number' className='w-full common-input-field' id="" />
                  </div> 
                  {/* ------------ job -------------- */}
                   <div className='col-span-6 sm:col-span-3'>
                       <label className="block text-sm font-medium text-white">
                          Job
                       </label>
                       <input type="text" name="job" placeholder='job' className='w-full common-input-field' id="" />
                  </div> 
              </div>
              {/* -------------- button div ------------------------------ */}
              <div className="px-4 pt-3 text-center sm:px-6" >
                     <button type="submit" className="gradient-btn lg:w-1/4  w-2/4">
                         Edit Now
                     </button>
              </div>
          </div>
      </form>
    </div>
    );
};

export default EditProfile;