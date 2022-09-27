import React from 'react';
import './MyProfile.css'

const MyPortfolio = () => {
    return (
    <div className='w-full min-h-[500px] h-fit max-[600px] md:p-5 p-2 bg-black/90'>
      <div className='backdrop-blur-sm bg-white/10 '>
          <div className='profile-img w-full h-2/4 py-20 flex justify-center'>
             <img src="https://i.ibb.co/3dx6c47/IMG-2080-3.jpg" className='lg:w-[250px] lg:h-[250px] sm:w-[200px]  sm:h-[200px] w-[150px] h-[150px] rounded-full' alt="" />
          </div>
          <div className='sm:p-5 p-3 w-full h-2/4 text-white/70 text-xl'>
            {/* ----------- my details ----------- */}
            <div>
                <h2 className='inline-block lg:mx-5 mx-1 my-2'>Name : Ashraful Alam</h2>
                <h2 className='inline-block lg:mx-5 mx-1 my-2'>Email : ashalam610@gmail.com</h2>
                <h2 className='inline-block lg:mx-5 mx-1 my-2'>Address : Araishidha , Ashuganj Brahmanbaria</h2>
                <h2 className='inline-block lg:mx-5 mx-1 my-2'>Education : 5th semestar Brahmanbaria Polytechnic Institute</h2>
                 <h2 className='inline-block lg:mx-5 mx-1 my-2'>Technology : HTML , CSS , TailwinCSS ,Daisy UI , Javascript , React JS ,React Router , Firebase Authentication , Basic Node JS and Express JS.</h2>
            </div>
            {/* --------------- my project ------------------- */}
            <div className='lg:p-5'>
               <h2 className='lg:text-2xl text-xl'>My Project :</h2>
               <div className='lg:p-5 py-5 sm:flex'>
                   <div className='md:w-1/3'>
                       <h2>Project One :</h2>
                       <div className='lg:p-4 py-4'>
                          <h2 className='text-lg'>Live Site : 
                             <a href="https://assignment-client-site-11.web.app/" className='btn bg-green-600 lg:p-2 p-1 '>
                                  Explore Live Site
                            </a> 
                          </h2>
                       </div>
                   </div>
                   <div className='md:w-1/3'>
                       <h2>Project Two :</h2>
                       <div className='lg:p-4 py-4'>
                          <h2 className='text-lg'>Live Site :  
                             <a href="https://musical-chimera-217e89.netlify.app/home" className='bg-green-600 btn lg:p-2 p-1'>
                                  Explore Live Site
                             </a> 
                          </h2>
                       </div>
                   </div>
                   <div className='md:w-1/3'>
                       <h2>Project Three :</h2>
                       <div className='lg:p-4 py-4'>
                       <h2 className='text-lg'> Live Site :  
                             <a href="https://assignment-firebase-10.firebaseapp.com/" className='bg-green-600 btn lg:p-2 p-1' >
                                  Explore Live Site
                             </a> 
                          </h2>
                       </div>
                   </div>
               </div>
            </div>
          </div>
      </div>
    </div>
    );
};

export default MyPortfolio;