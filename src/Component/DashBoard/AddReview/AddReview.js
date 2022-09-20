import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const [error , setError] = useState({
        nameError:'',
        ratingError:'',
        descriptionError:'',
        photoError:'',
       }
       )

    const handleAddReview = event => {
        event.preventDefault();
        const name = event.target.name?.value
        const rating = event.target.rating?.value
        const description = event.target.description?.value
        const photo = event.target.photo?.value
        
        if(name === '' && rating === '' && description === '' && photo === '') {
            setError({
                nameError:'name is required' ,
                ratingError: 'rating is required',
                descriptionError: 'description is required', 
                photoError: 'fruits photo is required'
            })

        }
       else if(name === ''){
            setError({nameError:'fruits name is required'})
        }
        else if(rating === ''){
            setError({ratingError:'rating is required'})
        }
        else if(description === '') {
                setError({descriptionError:'description is required'})
        }
        else if(photo === '') {
            setError({photoError:' photo is required'})
        }
        else{
            const review = {
            "name":name ,
            "rating": rating,
            "description":description,
            "img": photo
            }
            console.log(review)
            // fetch('http://localhost:5000/review', {
            // method: 'POST',
            // body: JSON.stringify(review),
            // headers: {
            //     'Content-type': 'application/json; charset=UTF-8',
            // },
            // })
            // .then((response) => response.json())
            // .then((json) => {
            //     toast.success('Successfully  add review')
            // });
        }
    }
    return (
   <div className="w-full min-h-[400px] h-full sm:max-h-[500px] max-h-[700px] sm:px-5 p-5  bg-black/90">
         {/* ------------------- form   ------------*/}
        <form onSubmit={handleAddReview} className='flex-col  w-full h-full p-4 sm:p-6 backdrop-blur-sm bg-white/30'>
         <h2 className='text-white text-center text-3xl mb-5'>Please Add Review</h2>
           <div className="w-full ">
              <div className="grid grid-cols-6 gap-6">
                 {/* --------------  name --------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="first-name" className="block text-sm font-medium text-white">
                          Name
                      </label>
                       <input type="text" name="name" placeholder=' name'
                         className="common-input-field"/>
                         {error?.nameError && 
                             <p className="text-red-500 text-base font-semibold">
                                 {error.nameError}
                             </p> 
                         }
                  </div>
                  {/* -------------- rating -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="last-name" className="block text-sm font-medium text-white">
                         Rating
                      </label>
                     <input type="number" name="rating" placeholder='rating'
                         className="common-input-field"/>
                     {error?.ratingError && 
                        <p className="text-red-500 text-base font-semibold">
                                 {error.ratingError}
                            </p> 
                      }
                  </div>
                   {/* ---------------  image --------------------*/}
                 <div className='col-span-6'>
                      <label className="block text-sm font-medium text-white">
                           photo
                      </label>
                       <input type="text" name="photo" placeholder='upload photo ' className='w-full common-input-field' id="" />
                       {error?.photoError && 
                            <p className="text-red-500 text-base font-semibold">
                              {error.photoError}
                           </p> 
                         } 
                  </div>   
                  {/* -------------------- description --------------------*/}
                  <div className='col-span-6 '>
                    <label htmlFor="about" className="block text-sm font-medium text-white">
                          Description
                     </label>
                    <div className="mt-1">
                        <textarea name="description" rows={4} className="common-input-field"
                           placeholder="description" defaultValue={''}/>
                        {error?.descriptionError && 
                          <p className="text-red-500 text-base font-semibold">
                                {error.descriptionError}
                           </p> 
                         }
                    </div>
                  </div>
              </div>
                   {/* -------------- button div ------------------------------ */}
              <div className="px-4 mt-5 text-center sm:px-6">
                 <button type="submit" className="gradient-btn md:w-1/4 w-2/4 text-white" onClick={handleAddReview}>
                         Submit
                </button>
               </div>
           </div>
        </form>
    </div>
    );
};

export default AddReview;