import React from 'react';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'
import Fade from 'react-reveal/Fade';


const Banner = () => {
    return (
      <Fade bottom>
             <div className="banner bg-blend-overlay w-full min-h-[500px] h-screen max-h-[600px] md:p-5 p-3 bg-black/70 flex justify-center items-center">
           {/* ----------- banner title ------------ */}
           <div className='lg:w-3/4 md:w-4/4 sm:w-3/4 w-4/4 text-center p-2'>
               <h2 className="banner-heading pb-5">    
               <Typewriter
              words={[' Welcome to Our Bengal Tools ', 'You can buy manufacturing tools here']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={''}
              onType={''}
             />
              </h2>
              <p className="text-white text-lg my-3">
                 Catnip as one of the favorite cat snack for most of the cats can increase cats’ appetite and relieve anxiety. When the cat bites the catnip ball, it can help grind the dirt off the teeth.<span className='xl:hidden hidden'> lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates explicabo saepe voluptatum asperiores. Nisi eius quidem sequi perspiciatis? Rem, dolor.
                    </span>
              </p>
            {/* ------------ button */}
              <button className="text-xl w-48 px-8 py-2 rounded text-white main-btn ">
                Explore  
              </button>
           </div>
            </div>
      </Fade>
    
    );
};

export default Banner;