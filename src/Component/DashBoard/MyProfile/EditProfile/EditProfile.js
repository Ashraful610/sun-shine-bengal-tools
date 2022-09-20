import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProfile = () => {
  const email = useParams()
  const [user , setUser] = useState({})
    const [error , setError] = useState({
        nameError:'',
        emailError:'',
        addressError:'',
        phoneError:'',
        educationError:'',
        jobError:'',
       }
       )

       useEffect(()=>{
        fetch(`http://localhost:5000/user/${email.email}`)
        .then(res => res.json())
        .then(data =>setUser(data))
     },[])

    const handleUpdateProfile = event => {
        event.preventDefault();
        const newvar = event.target.new?.value
        const name = event.target.name?.value
        const email = event.target.email?.value
        const address = event.target.address?.value
        const phone = event.target.number?.value
        const education = event.target.education?.value
        const job = event.target.job?.value
        console.log(newvar);

        if(name === '' && address === '' && phone === '' && job === '' && education === '') 
        {
            setError({
                nameError:'name is required' ,
                emailError: 'email is required',
                addressError: 'address is required',
                phoneError: 'phone number is required', 
                jobError: 'job is required'
            })

        }
       else if(name === ''){
            setError({nameError:' name is required'})
        }
        else if(email === ''){
            setError({emailError:'email is required'})
        }
        else if(address === ''){
            setError({addressError:'address is required'})
        }
        else if(phone === ''){
            setError({phoneError:'phone number is required'})  
        }
        else if(education === ''){
            setError({educationError:'eduction is required'})  
        }
        else if(job === ''){
            setError({jobError:'job is required'})  
        }
        else {
            const profileUpdate = {
              name:name,
              email:email,
              education:education,
              address:address,
              phone:phone,
              job:job
            }
            console.log(profileUpdate)
        }
    }
    return (
    <div>
      <form onSubmit={handleUpdateProfile} className=' w-full min-h-[500px] h-fit px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/10'>
          <div className=" w-full ">
              <div className="grid grid-cols-6 gap-6">
                  {/* --------------  name --------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                       <label htmlFor="first-name" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" name="name" placeholder='name'
                        className="common-input-field" defaultValue={user?.name}/>
                        {error?.nameError && 
                           <p className="text-red-500 text-base font-semibold">
                             {error.nameError}
                            </p> 
                        }
                  </div>
                  {/* -------------- email -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-white">Email</label>
                       <input type="email" name="email" placeholder='email'
                          className="common-input-field"  defaultValue={user?.email} disabled/>
                         {error?.emailError && 
                          <p className="text-red-500 text-base font-semibold">
                            {error.emailError}
                          </p> 
                         }
                  </div>
                  {/* -------------- Education  ----------------*/}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white">Education</label>
                      <input type="text" name="education" placeholder='education'
                        className="common-input-field"/>
                      {error?.educationError && 
                         <p className="text-red-500 text-base font-semibold">
                           {error.educationError}
                         </p> 
                     }
                  </div>
                  {/* ------------------- Address -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-white">Address</label>
                      <input type="text" name="address" placeholder='address'
                        className="common-input-field"/>
                       {error?.addressError && 
                          <p className="text-red-500 text-base font-semibold">
                            {error.addressError}
                          </p> 
                      }
                  </div>
                   {/* --------------- phone number --------------------*/}
                   <div className='col-span-6 sm:col-span-3'>
                       <label className="block text-sm font-medium text-white">
                          Phone number
                       </label>
                       <input type="number" name="number" placeholder='phone number' className='w-full common-input-field' id="" />
                        {error?.phoneError && 
                          <p className="text-red-500 text-base font-semibold">
                               {error.phoneError}
                         </p> 
                          } 
                  </div> 
                  {/* ------------ job -------------- */}
                   <div className='col-span-6 sm:col-span-3'>
                       <label className="block text-sm font-medium text-white">
                          Job
                       </label>
                       <input type="text" name="job" placeholder='job' className='w-full common-input-field' id="" />
                        {error?.jobError && 
                          <p className="text-red-500 text-base font-semibold">
                               {error.jobError}
                         </p> 
                          } 
                  </div> 
              </div>
              {/* -------------- button div ------------------------------ */}
              <div className="px-4 pt-3 text-center sm:px-6" onClick= {event => handleUpdateProfile (event)}>
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