import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const [error , setError]  = useState({reviewNameError:'',ratingError:'',commentError:'',photoError:'',})

    const handleAddReview = (event) => {
        event.preventDefault();
        const reviewName = event.target.reviewName?.value
        const rating = event.target.rating?.value
        const comment = event.target.comment?.value
        const photo = event.target.photo?.value
        
        if(!reviewName && !rating && !comment && !photo){
           setError({reviewNameError:"please give your name",ratingError:"please give rating",commentError:"please give comment",photoError:"please give photo"})
        }
        else if(!reviewName){
            setError({reviewNameError:"please give your name"})
        }
        else if(!rating){
            setError({ratingError:"please give rating"})
        }
        else if( rating < 0){
            setError({ratingError:"please give rating must one"})
        }
        else if(rating > 5){
            setError({ratingError:"please give rating must be between 1 and 5"})
        }
        else if(!photo){
            setError({photoError:"please give photo"})
        }
        else if(!comment){
            setError({commentError:"please give comment"})
        }
        else{
            const review = {
                "name":reviewName,
                "rating": rating,
                "description":comment,
                "img": photo
                }
            
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
                        toast.success(`${user?.displayName} thanks for giving review`)
                        navigate('/home')
                    }
                });
        }
    }
    return (
   <div className="w-full min-h-[400px] h-full sm:max-h-[550px] max-h-[700px] sm:px-5  bg-black/90">
         {/* ------------------- form   ------------*/}
        <form onSubmit={handleAddReview} className='flex-col  w-full h-full p-4 sm:p-6 backdrop-blur-sm bg-slate-800'>
         <h2 className='text-white text-center text-3xl mb-5'>Please Add Review</h2>
           <div className="w-full ">
              <div className="grid grid-cols-6 gap-6">
                 {/* --------------  reviewName--------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="name" className="block text-sm font-medium text-white">
                          Name
                      </label>
                       <input type="text" name="reviewName" placeholder='name'
                         className="common-input-field" />
                        {
                            error?.reviewNameError && <p className='text-base text-red-500'>{error.reviewNameError}</p>
                        }
                  </div>
                  {/* -------------- rating -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="rating" className="block text-sm font-medium text-white">
                         Rating
                      </label>
                     <input type="number" name="rating" placeholder='rating'
                         className="common-input-field"/>
                          {
                            error?.ratingError && <p className='text-base text-red-500'>{error.ratingError}</p>
                        }
                  </div>
                   {/* ---------------  image --------------------*/}
                 <div className='col-span-6'>
                      <label htmlFor='photo' className="block text-sm font-medium text-white">
                           photo
                      </label>
                       <input type="text" name="photo" placeholder=' photo ' className='w-full common-input-field' id="" />
                       {
                            error?.photoError && <p className='text-base text-red-500'>{error.photoError}</p>
                        }
                  </div>   
                  {/* -------------------- description --------------------*/}
                  <div className='col-span-6 '>
                    <label htmlFor="description" className="block text-sm font-medium text-white">
                          Comment
                     </label>
                    <div className="mt-1">
                        <textarea name="comment" rows={4} className="common-input-field"
                           placeholder="write your comment ..." defaultValue={''}/>
                             {
                            error?.commentError && <p className='text-base text-red-500'>{error.commentError}</p>
                        }
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