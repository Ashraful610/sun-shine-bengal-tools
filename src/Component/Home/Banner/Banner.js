import React from 'react';
import './Banner.css'
import  images from '../../../Photo/images.png'

const Banner = () => {
    return (
     <div className="banner bg-blend-overlay w-full min-h-[500px] h-screen md:p-5 p-3 bg-black/70 flex justify-center items-center">
           {/* ----------- banner title ------------ */}
           <div className=' lg:w-3/4 sm:w-3/4 w-4/4 text-center p-2'>
               <h2 className="lg:text-6xl md:text-5xl  text-3xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-sky-400">
               Welcome to Our  <span className='font-serif'> Bengal Tools  </span>
              </h2>
              <p className="text-white text-lg my-3">
                 Catnip as one of the favorite cat snack for most of the cats can increase cats’ appetite and relieve anxiety. When the cat bites the catnip ball, it can help grind the dirt off the teeth.<span className='xl:hidden hidden'> lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates explicabo saepe voluptatum asperiores. Nisi eius quidem sequi perspiciatis? Rem, dolor.
                    </span>
              </p>
            {/* ------------ button */}
              <button className="text-xl w-48 px-8 py-2 rounded text-white gradient-btn btn">
                Explore  
              </button>
           </div>
    </div>
    );
};

export default Banner;