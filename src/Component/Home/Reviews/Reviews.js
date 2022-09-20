import React, { useEffect, useState } from 'react';
import Review from './Review/Review'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() =>{
         fetch('http://localhost:5000/reviews')
         .then(res => res.json())
         .then(data => setReviews(data))
     },[])
    return (
    <main className="w-full min-h-[500px] h-fit sm:px-10 sm:pb-10 md:px-8 p-5 bg-black/90 ">
          <div className="sm:p-5 p-0">
             <h2 className='sm:text-5xl text-3xl text-center  font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-sky-500'>
                Our Customers Reviews
             </h2>
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