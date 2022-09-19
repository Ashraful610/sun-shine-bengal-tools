import React from 'react';
import './ExtraSectionOne.css'

const ExtraSectionOne = () => {
    return (
        <section className="p-5 bg-black/90 min-h-screen h-full">
             <h2 className='text-5xl text-center  font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-sky-500'>
               Our Service
             </h2>
           <div className='w-full lg:mt-20 h-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center xl:gap-10 gap-5 py-5'>
                {/* ---------- service one ------------ */}
                <div className="backdrop-blur-sm bg-white/10 p-5 h-[250px] w-full">
                    <div className="w-full h-2/4 flex justify-center">
                        <div className='bg-white/50 lg:w-28 lg:h-28 w-24 h-24 rounded-full flex justify-center items-center'>
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/frame-1654503804702.png?v=1654503805" className="lg:w-24 lg:h-24 w-20 w-20" alt=""/>
                        </div>
                    </div>
                    <div className="w-full h-2/4 lg:p-5 p-2 text-center text-white/80">
                        <h5 className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-500'>100% Original Product.</h5>
                        <p>Genuine imported product.</p>
                    </div>            
                </div>
                {/* --------------- service two ------------ */}
                <div className=" backdrop-blur-sm bg-white/10 p-5 h-[250px] w-full">
                    <div className="w-full h-2/4 flex justify-center">
                        <div className='bg-white/50 w-28 h-28 rounded-full flex justify-center items-center'>
                             <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/frame-1-1654503768600.png?v=1654503769" className="w-24 h-24" alt=""/>
                        </div>
                    </div>
                    <div className="w-full h-2/4 p-5 text-center text-white/80">
                        <h5 className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-500'>100% Secure Payment.</h5>
                        <p>Highest grade security .</p>
                    </div>            
                </div>
                {/* ------------ service three ------------ */}
                <div className="backdrop-blur-sm bg-white/10 p-5 h-[250px] lg:col-span-1 sm:col-span-2 w-full">
                   <div className="w-full h-2/4 flex justify-center">
                       <div className='bg-white/50 w-28 h-28 rounded-full flex justify-center items-center'>
                            <img src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/frame-2-1654503818128.png?v=1654503819" className="w-24 h-24" alt=""/>
                       </div>
                    </div>
                    <div className="w-full h-2/4 p-5 text-center text-white/80">
                        <h5 className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-500'>100% Purchase Protection.</h5>
                        <p>Worry-free ordering .</p>
                    </div>            
                </div>
           </div>
     </section>
    );
};

export default ExtraSectionOne;