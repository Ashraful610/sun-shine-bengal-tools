import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const navigate = useNavigate()

    const handleAddReview = (event) => {
        event.preventDefault();
        const reviewName = event.target.reviewName?.value
        const rating = event.target.rating?.value
        const description = event.target.description?.value
        const photo = event.target.photo?.value
        console.log(reviewName, rating , description , photo);

        if(reviewName  && rating  && description  && photo ){
            const review = {
                "name":reviewName,
                "rating": rating,
                "description":description,
                "img": photo
                }
                console.log(review)
                fetch('http://localhost:5000/review', {
                   method: 'POST',
                   body: JSON.stringify(review),
                   headers: {
                       'Content-type': 'application/json; charset=UTF-8',
                       'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }})
                .then((response) => response.json())
                .then((result) => {
                    if(result.insertedId){
                        toast.success('Review added successfully')
                        navigate('/home')
                    }
                });
        }
    }
    return (
   <div className="w-full min-h-[400px] h-full sm:max-h-[550px] max-h-[700px] sm:px-5 p-5  bg-black/90">
         {/* ------------------- form   ------------*/}
        <form onSubmit={handleAddReview} className='flex-col  w-full h-full p-4 sm:p-6 backdrop-blur-sm bg-white/30'>
         <h2 className='text-white text-center text-3xl mb-5'>Please Add Review</h2>
           <div className="w-full ">
              <div className="grid grid-cols-6 gap-6">
                 {/* --------------  reviewName--------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="name" className="block text-sm font-medium text-white">
                          Name
                      </label>
                       <input type="text" name="reviewName" placeholder='name'
                         className="common-input-field"/>
                  </div>
                  {/* -------------- rating -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="rating" className="block text-sm font-medium text-white">
                         Rating
                      </label>
                     <input type="number" name="rating" placeholder='rating'
                         className="common-input-field"/>
                  </div>
                   {/* ---------------  image --------------------*/}
                 <div className='col-span-6'>
                      <label htmlFor='photo' className="block text-sm font-medium text-white">
                           photo
                      </label>
                       <input type="text" name="photo" placeholder=' photo ' className='w-full common-input-field' id="" />
                  </div>   
                  {/* -------------------- description --------------------*/}
                  <div className='col-span-6 '>
                    <label htmlFor="description" className="block text-sm font-medium text-white">
                          Description
                     </label>
                    <div className="mt-1">
                        <textarea name="description" rows={4} className="common-input-field"
                           placeholder="description" defaultValue={''}/>
                    </div>
                  </div>
              </div>
                   {/* -------------- button div ------------------------------ */}
              <div className="px-4 mt-5 text-center sm:px-6">
                 <button type="submit" className="gradient-btn md:w-1/4 w-2/4 text-white">
                         Submit
                </button>
               </div>
           </div>
        </form>
    </div>
    );
};

export default AddReview;