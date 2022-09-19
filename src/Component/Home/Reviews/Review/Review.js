import React from 'react';

const Review = ({review}) => {
    const {img , description , rating , name} = review;
    return (
        <div className=" text-white  backdrop-blur-sm bg-white/30">
          {/* -- ---------- img div -----------*/}
            <div className="img-div flex justify-center p-4 ">
                <img src={img} className='w-28 h-28 rounded-full' alt="" />
            </div>
            {/* ------- review text -----------*/}
            <div className="content-text text-center  px-2">
                <p className="py-2">{description}</p>  
                <h2>Rating : {rating} </h2>
                 <h3 className="font-semibold text-lg py-2 font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sky-500">
                     {name}
                </h3>
            </div>
    </div>
    );
};

export default Review;