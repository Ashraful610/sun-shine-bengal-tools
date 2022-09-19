import React from 'react';
import './Banner.css'
import  images from '../../../Photo/images.png'

const Banner = () => {
    return (
     <div className="banner w-full lg:min-h-[500px]  md:h-screen h-full md:p-5 p-3 bg-black/90 lg:flex flex-col">
          <div className=" lg:w-2/4 w-4/4 lg:h-full h-2/4 md:p-4 lg:order-1 order-2">
           {/* ----------- banner title ------------ */}
            <h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-500">
               Welcome to Our  <span className='font-serif'> Bengal Tools  </span>
            </h2>
                <p className="text-white my-3">Catnip as one of the favorite cat snack for most of the cats can increase cats’ appetite and relieve anxiety. When the cat bites the catnip ball, it can help grind the dirt off the teeth, clean the teeth, freshen the breath and regulate its mood. The nutrients in the cat nip balls can promote bowel movement.</p>
            {/* ------------ button */}
            <button className="text-xl  px-8 py-2 rounded text-white gradient-btn btn">
                Shop Now 
            </button>
          </div> 
        {/* ------------ banner img  */}
         <div className="lg:w-2/4 w-4/4 lg:h-full h-2/4   md:order-last order-first">
            <img src={images} className='w-full h-full' alt="" />
         </div>
    </div>
    );
};

export default Banner;