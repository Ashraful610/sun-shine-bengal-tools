import React from 'react';

const BusinessSummary = () => {
  
    return (
        <main className="w-full lg:h-screen md:h-[600px] bg-black/90 h-fit sm:px-10 sm:pb-10 md:px-8 p-5 ">
            <div className="sm:p-5 p-0">
               <h2 className='md:text-5xl text-4xl text-center  font-semibold font-serif bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-sky-500'>
                  Our Business Summary
               </h2>
            </div>
            {/* -------- summary section --------------------*/}
            <section className="w-full md:h-4/5 h-full flex items-center">
                <div className="w-full  md:h-3/4  lg:p-5 md:py-0 py-5 grid md:grid-cols-3 gap-5">
                        {/* ----------- summary one --------------------*/}
                    <div className=" text-white  backdrop-blur-sm bg-white/10">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center p-4 ">
                            <img src="https://i.ibb.co/Jxp5v5R/mendator-removebg-preview.png" alt="" className='w-24 h-24 bg-white rounded-full'/>
                        </div>
                        {/* ------- summary text -----------*/}
                        <div className="content-text text-center  px-2">
                           <div>
                              <h3 className="font-semibold py-2 bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-sky-500 font-serif">
                                we served 100+ customers
                              </h3>
                            </div>
                            <p className="py-2">
                                Like the products since the first try and now I’m a loyal customer.
                            </p>
                        </div>
                    </div>
                        {/* ----------- summary two --------------------*/}
                    <div className=" text-white  backdrop-blur-sm bg-white/10 ">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center py-4 ">
                            <img src="https://i.ibb.co/ZcLHKtH/1421335.png" className='w-24 h-24 bg-white rounded-full' alt=""/>
                        </div>
                        {/* ------- summary text -----------*/}
                        <div className="content-text text-center px-2">
                            <div className="">
                                <h3 className="font-semibold py-2 bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-sky-500 font-serif ">
                                    120M+ Annual revenue
                                </h3>
                             </div>
                            <p className="py-2">
                                Great service and quick delivery! Now I can travel in my own style!.
                            </p>
                        </div>
                    </div>
                    {/* ----------- summary three --------------------*/}
                    <div className=" text-white  backdrop-blur-sm bg-white/10">
                        {/* -- ---------- img div -----------*/}
                        <div className="img-div flex justify-center py-4 ">
                            <img src="https://i.ibb.co/sjNHkHX/22-224941-log-summary-comments-summary-icon.png" className='w-24 h-24 bg-white rounded-full' alt=""/>
                        </div>
                        {/* ------- summary text -----------*/}
                        <div className="content-text text-center px-2">
                            <div>
                                <h3 className="font-semibold bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-sky-500 py-2 font-serif ">
                                   33K+ summarys
                                </h3>
                            </div>
                            <p className="py-2">
                                Not really sure if the product meets my needs at first,
                            </p>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    );
};

export default BusinessSummary;