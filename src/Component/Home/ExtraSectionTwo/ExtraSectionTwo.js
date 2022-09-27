import React from 'react';
import './ExtraSectionTwo.css'
import Fade from 'react-reveal/Fade';

const ExtraSectionTwo = () => {
    return (
    //  <section class="fifth-section">
    //     <div class="fifth-section-div">
    //           {/* ------------ title div --------------- */}
    //           <div class="fifth-section-title-div">
    //              <h2 class="fifth-section-title">Testimonials</h2>
    //           </div>
    //           {/* ---------- carousel div ------------- */}
    //           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    //             <div class="carousel-indicators">
    //                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active slide-btn" aria-current="true" aria-label="Slide 1">
    //                 </button>
    //                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="slide-btn" aria-label="Slide 2">
    //                 </button>
    //                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="slide-btn" aria-label="Slide 3">
    //                 </button>
    //             </div>
    //             <div class="carousel-inner">
    //               <div class="carousel-item active">
    //                   <div class="carousel-img-div">
    //                  <img src="https://cdn.shopify.com/s/files/1/0554/7370/0921/t/7/assets/pfb419d9a4b57349a5b2adb2f5ca0946a4essence11_1200x-1653822159769.png?v=1653822161" class="carousel-img" alt="..." //>
    //                    </div>
    //                   <div class="star-div">
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                   </div>  
    //                   <div class="carousel-details">
    //                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut nam ullam ab recusandae animi eaque accusamus placeat distinctio iure similique, ratione ex at harum neque sunt ducimus odit fuga.</p>
    //                      <h2>Anna Waston</h2>
    //                   </div>           
    //               </div>
    //               <div class="carousel-item ">
    //                 <div class="carousel-img-div">
    //                <img src="https://cdn.shopify.com/s/files/1/0554/7370/0921/t/7/assets/pf93ba399e2a92430b9dbe832ec937815dessence10_1200x-1653822159773.png?v=1653822163" class="carousel-img" alt="..." //>
    //                  </div>
    //                 <div class="star-div">
    //                   <i class="fa-solid fa-star"></i>
    //                   <i class="fa-solid fa-star"></i>
    //                   <i class="fa-solid fa-star"></i>
    //                   <i class="fa-solid fa-star"></i>
    //                   <i class="fa-solid fa-star"></i>
    //                 </div>  
    //                 <div class="carousel-details">
    //                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut nam ullam ab recusandae animi eaque accusamus placeat distinctio iure similique, ratione ex at harum neque sunt ducimus odit fuga.</p>
    //                    <h2>Kim Westlook</h2>
    //                 </div>           
    //             </div>
    //             <div class="carousel-item">
    //               <div class="carousel-img-div">
    //              <img src="https://cdn.shopify.com/s/files/1/0554/7370/0921/t/7/assets/pf4874cab938b5479a8643145d8c1915d7essence05_1200x-1653821861947.png?v=1653821863" class="carousel-img" alt="..." //>
    //                </div>
    //               <div class="star-div">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>  
    //               <div class="carousel-details">
    //                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ut nam ullam ab recusandae animi eaque accusamus placeat distinctio iure similique, ratione ex at harum neque sunt ducimus odit fuga.</p>
    //                  <h2>Paula Wilson</h2>
    //               </div>           
    //           </div>
    //             </div>
    //             <button class="carousel-control-prev" type="button"   data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //               <span class="visually-hidden">Previous</span>
    //             </button>
    //             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //               <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //               <span class="visually-hidden">Next</span>
    //             </button>
    //           </div>
    //     </div>   
    //  </section>
     <div className='w-full min-h-[550px] h-fit max-h-[600px] bg-black/90 lg:p-5 p-2'> 
     <Fade right >
        <h2 className='md:text-5xl text-3xl text-center  font-semibold font-serif text-green-600'>
            Testimonials
             </h2>
     </Fade>
       
         <div className='w-full h-full  flex xl:items-center sm:px-5 p-2'>
            <div className="carousel w-full h-[400px] flex items-center">
                <div id="slide1" className="carousel-item relative w-full h-full backdrop-blur-sm bg-white/10">
                    {/* ----------- main content ---------- */}
                     <div className='w-full h-full'>
                        <div className='w-full h-2/4 flex justify-center items-center'>
                            <img src="https://placeimg.com/800/200/arch" className="md:w-40 md:h-40 sm:w-36 sm:h-36 w-28 h-28 rounded-full" />
                        </div>
                        {/* --------- details ------------- */}
                        <div className='text-center'>
                            {/* ----------- rating ------------ */}
                            <div className="rating rating-md">
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1"/>
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                             </div>
                             {/* --------- text -------- */}
                            <div>
                                <p className='text-white md:px-36 sm:px-20 px-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, earum. Eligendi deserunt praesentium possimus, ad quidem rerum nemo sit velit.
                                </p>
                                <h2 className='text-xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>Ashraful Alam</h2>
                            </div>
                        </div>
                     </div>
                        {/* ---------- left right button -------------- */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide4" className="btn btn-circle">❮</a> 
                           <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full h-full backdrop-blur-sm bg-white/10 ">
                      {/* ----------- main content ---------- */}
                     <div className='w-full h-full'>
                        <div className='w-full h-2/4 flex justify-center items-center'>
                            <img src="https://placeimg.com/800/200/arch" className="md:w-40 md:h-40 sm:w-36 sm:h-36 w-28 h-28 rounded-full" />
                        </div>
                        {/* --------- details ------------- */}
                        <div className='text-center'>
                            {/* ----------- rating ------------ */}
                            <div className="rating rating-md">
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1"/>
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                             </div>
                             {/* --------- text -------- */}
                            <div>
                                <p className='text-white md:px-36 sm:px-20 px-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, earum. Eligendi deserunt praesentium possimus, ad quidem rerum nemo sit velit.
                                </p>
                                <h2 className='text-xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>Atif Islam</h2>
                            </div>
                        </div>
                     </div>
                        {/* ---------- left right button -------------- */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide1" className="btn btn-circle">❮</a> 
                           <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full h-full backdrop-blur-sm bg-white/10">
                      {/* ----------- main content ---------- */}
                     <div className='w-full h-full'>
                        <div className='w-full h-2/4 flex justify-center items-center'>
                            <img src="https://placeimg.com/800/200/arch" className="md:w-40 md:h-40 sm:w-36 sm:h-36 w-28 h-28 rounded-full" />
                        </div>
                        {/* --------- details ------------- */}
                        <div className='text-center'>
                            {/* ----------- rating ------------ */}
                            <div className="rating rating-md">
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1"/>
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                             </div>
                             {/* --------- text -------- */}
                            <div>
                                <p className='text-white md:px-36 sm:px-20 px-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, earum. Eligendi deserunt praesentium possimus, ad quidem rerum nemo sit velit.
                                </p>
                                <h2 className='text-xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>Amir Khan</h2>
                            </div>
                        </div>
                     </div>
                        {/* ---------- left right button -------------- */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide2" className="btn btn-circle">❮</a> 
                           <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full h-full backdrop-blur-sm bg-white/10">
                        {/* ----------- main content ---------- */}
                     <div className='w-full h-full'>
                        <div className='w-full h-2/4 flex justify-center items-center'>
                            <img src="https://placeimg.com/800/200/arch" className="md:w-40 md:h-40 sm:w-36 sm:h-36 w-28 h-28 rounded-full" />
                        </div>
                        {/* --------- details ------------- */}
                        <div className='text-center'>
                            {/* ----------- rating ------------ */}
                            <div className="rating rating-md">
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1"/>
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                                <input type="" name="rating-7" className="mask mask-star-2 bg-orange-400 mx-1" />
                             </div>
                             {/* --------- text -------- */}
                            <div>
                                <p className='text-white md:px-36 sm:px-20 px-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, earum. Eligendi deserunt praesentium possimus, ad quidem rerum nemo sit velit.
                                </p>
                                <h2 className='text-xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500'>Salman Khan</h2>
                            </div>
                        </div>
                     </div>
                        {/* ---------- left right button -------------- */}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide3" className="btn btn-circle">❮</a> 
                           <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
         </div>
   </div>

    );
};

export default ExtraSectionTwo;