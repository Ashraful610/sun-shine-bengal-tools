import React from 'react';
import './ExtraSectionOne.css'
import Fade from 'react-reveal/Fade';

const ExtraSectionOne = () => {
    return (
        <section className="p-5 bg-black/90 min-h-[550px] h-fit max-h-[900px]">
            <Fade bottom>
              <h2 className='text-5xl text-center banner-heading'>
               Our Service
               </h2>
            </Fade>
          
           <div className='w-full lg:mt-20 h-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center xl:gap-10 gap-5 py-5'>
                {/* ---------- service one ------------ */}
                <Fade left > 
                <div className="backdrop-blur-sm bg-white/10 p-5 h-[250px] w-full">
                    <div className="w-full h-2/4 flex justify-center">
                        <div className='bg-white/50 lg:w-28 lg:h-28 w-24 h-24 rounded-full flex justify-center items-center'>
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/frame-1654503804702.png?v=1654503805" className="lg:w-24 lg:h-24 w-20 w-20" alt=""/>
                        </div>
                    </div>
                    <div className="w-full h-2/4 lg:p-5 p-2 text-center text-white/80">
                        <h5 className=' bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>100% Original Product.</h5>
                        <p>Genuine imported product.</p>
                    </div>            
                </div>
                </Fade>
              
                {/* --------------- service two ------------ */}
                <Fade bottom >
                <div className=" backdrop-blur-sm bg-white/10 p-5 h-[250px] w-full">
                    <div className="w-full h-2/4 flex justify-center">
                        <div className='bg-white/50 w-28 h-28 rounded-full flex justify-center items-center'>
                             <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/frame-1-1654503768600.png?v=1654503769" className="w-24 h-24" alt=""/>
                        </div>
                    </div>
                    <div className="w-full h-2/4 p-5 text-center text-white/80">
                        <h5 className=' bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>100% Secure Payment.</h5>
                        <p>Highest grade security .</p>
                    </div>            
                </div>

                </Fade>
               
                {/* ------------ service three ------------ */}
                <Fade right>
                <div className="backdrop-blur-sm bg-white/10 p-5 h-[250px] lg:col-span-1 sm:col-span-2 w-full">
                   <div className="w-full h-2/4 flex justify-center">
                       <div className='bg-white/50 w-28 h-28 rounded-full flex justify-center items-center'>
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/frame-2-1654503818128.png?v=1654503819" className="w-24 h-24" alt=""/>
                       </div>
                    </div>
                    <div className="w-full h-2/4 p-5 text-center text-white/80">
                        <h5 className=' bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>100% Purchase Protection.</h5>
                        <p>Worry-free ordering .</p>
                    </div>            
                </div>
                </Fade>
              
           </div>
     </section>
    );
};

export default ExtraSectionOne;