import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Review from './Review/Review'
import Fade from 'react-reveal/Fade';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() =>{
         fetch('https://intense-journey-19881.herokuapp.com/reviews')
         .then(res => res.json())
         .then(data => setReviews(data))
     },[])
     if(!reviews){
        return <Loading></Loading>
     }
    return (
    <main className="w-full min-h-[500px] h-fit sm:px-10 sm:pb-10 md:px-8 p-5 bg-black/90 ">
          <div className="sm:p-5 p-0">
            <Fade top >
            <h2 className='sm:text-5xl text-3xl text-center  font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500'>
                Our Customers Reviews
             </h2>

            </Fade>
           
          </div>
        {/* -------- review section --------------------*/}
        <section className="w-full h-5/6 flex items-center">
            <div className="w-full h-full  lg:p-5 md:py-0 py-5 grid md:grid-cols-3 gap-5">
                {
                    reviews.map(review => <Review key={review.img} review={review}></Review>)
                }
              
            </div>
        </section>
   </main>
    );
};

export default Reviews;