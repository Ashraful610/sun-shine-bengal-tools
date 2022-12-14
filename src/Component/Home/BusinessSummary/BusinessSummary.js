import React from 'react';
import Fade from 'react-reveal/Fade';

const BusinessSummary = () => {
  
    return (
     <main className="w-full bg-white sm:px-10 sm:pb-10 md:px-3 lg:px-8 p-2 ">
        <section className = 'min-h-[550px] h-fit sm:max-h-[600px] max-h-fit mt-5'>
            <div className="sm:p-10 p-0 h-2/6">
                <Fade top >
                <h2 className='md:text-5xl text-4xl text-center  font-semibold font-serif text-green-500'>
                  Our Business Summary
               </h2>
                </Fade>
            
            </div>
            {/* -------- summary section --------------------*/}
            <div className="w-full sm:h-4/6  h-full ">
                <div className="w-full  md:h-3/4  lg:p-5 pb-10 grid md:grid-cols-3 gap-5">
                        {/* ----------- summary one --------------------*/}
                        <Fade top >
                        <div className=" text-white  backdrop-blur-sm bg-black/80 p-5 border-4 border-sky-300">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center p-4 ">
                            <img src="https://i.ibb.co/Jxp5v5R/mendator-removebg-preview.png" alt="" className='w-24 h-24 bg-white rounded-full'/>
                        </div>
                        {/* ------- summary text -----------*/}
                        <div className="content-text text-center  p-2">
                           <div>
                              <h3 className="font-semibold py-2 bg-clip-text  text-transparent bg-gradient-to-r from-green-400 to-teal-500 font-serif">
                                we served 100+ customers
                              </h3>
                            </div>
                            <p className="py-2">
                                Like the products since the first try and now I’m a loyal customer.
                            </p>
                        </div>
                        </div>
                        </Fade>
               
                        {/* ----------- summary two --------------------*/}
                        <Fade bottom>
                        <div className=" text-white  backdrop-blur-sm bg-black/80 p-5 border-4 border-sky-300">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center py-4 ">
                            <img src="https://i.ibb.co/ZcLHKtH/1421335.png" className='w-24 h-24 bg-white rounded-full' alt=""/>
                        </div>
                        {/* ------- summary text -----------*/}
                        <div className="content-text text-center px-2">
                            <div className="">
                                <h3 className="font-semibold py-2 bg-clip-text  text-transparent bg-gradient-to-r from-green-400 to-teal-500font-serif ">
                                    120M+ Annual revenue
                                </h3>
                             </div>
                            <p className="py-2">
                                Great service and quick delivery! Now I can travel in my own style!.
                            </p>
                        </div>
                        </div>

                        </Fade>
                
                    {/* ----------- summary three --------------------*/}
                    <Fade top>
                    <div className=" text-white  backdrop-blur-sm bg-black/80 p-5 border-4 border-sky-300">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center py-4 ">
                            <img src="https://i.ibb.co/sjNHkHX/22-224941-log-summary-comments-summary-icon.png" className='w-24 h-24 bg-white rounded-full' alt=""/>
                        </div>
                        {/* ------- summary text -----------*/}
                        <div className="content-text text-center px-2">
                            <div>
                                <h3 className="font-semibold bg-clip-text  text-transparent bg-gradient-to-r from-green-400 to-teal-400 py-2 font-serif ">
                                   33K+ summarys
                                </h3>
                            </div>
                            <p className="py-2">
                                Not really sure if the product meets my needs at first,
                            </p>
                        </div>
                    </div>

                    </Fade>
                   
                </div>
            </div>
       </section>
  </main>
    );
};

export default BusinessSummary;