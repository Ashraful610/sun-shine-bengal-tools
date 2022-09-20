import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddTools = () => {
    const navigate = useNavigate();
    const [error , setError] = useState({
        toolNameError:'',
        priceError:'',
        availableQuantityError:'',
        minimumQuantityError:'',
        descriptionError:'',
        toolPhotoError:'',
       }
       )

   const handleAddTools = event =>{ 
       event.preventDefault();

       const toolName = event.target.toolName?.value
       const price = event.target.price?.value
       const availableQuantity = event.target.availableQuantity?.value
       const minimumQuantity = event.target.minimumQuantity?.value
       const description = event.target.description?.value
       const toolPhoto = event.target.toolPhoto?.value

       if(toolName === '' && price === ''  && availableQuantity === '' && description === '' && toolPhoto === '' && minimumQuantity === '') {
           setError({
               toolNameError:'name is required' ,
               priceError: 'price is required',
               minimumQuantityError: 'minimum quantity is required',
               availableQuantityError: 'available Quantity is required',
               descriptionError: 'description is required', 
               toolPhotoError: 'tool photo is required'
           })

       }
      else if(toolName === ''){
           setError({toolNameError:'fruits name is required'})
       }
       else if(price === ''){
           setError({priceError:'price is required'})
       }
       else if(availableQuantity === ''){
           setError({availableQuantityError:'available Quantity is required'})  
       }
       else if(minimumQuantity === ''){
           setError({minimumQuantityError:'minimum Quantity is required'})
       }
       else if(toolPhoto === '') {
           setError({toolPhotoError:'tool photo is required'})
       }
       else if(description === '') {
               setError({descriptionError:'description is required'})
       }
       else{
           const newTool = {
           "name":toolName ,
           "price": price,
           "description":description,
           "availableQuantity": availableQuantity,
           "img": toolPhoto,
           "minimumQuantity": minimumQuantity
           }
           fetch('http://localhost:5000/tool', {
           method: 'POST',
           body: JSON.stringify(newTool),
           headers: {
               'Content-type': 'application/json; charset=UTF-8',
           },
           })
           .then((response) => response.json())
           .then((json) => {
             console.log(json)
               toast.success('Successfully  add fruit')
           });
          navigate('/')
       }
   }

   
    return ( 
     <form onSubmit={handleAddTools} className='w-full min-h-[500px] h-fit px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/30'>
         <div className=" w-full ">
            <div className="grid grid-cols-6 gap-6">
               {/* -------------- tool name --------------------*/}
              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-white">
                                Tool name
                  </label>
                  <input
                        type="text"
                        name="toolName"
                        placeholder='tool name'
                        className="common-input-field"
                   />
                     {error?.toolNameError && 
                       <p className="text-red-500 text-base font-semibold">
                            {error.toolNameError}
                           </p> 
                   }
               </div>
               {/* -------------- price -------------------- */}
               <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-white">
                                Price
                     </label>
                     <input
                            type="number"
                            name="price"
                            placeholder='price'
                            className="common-input-field"
                     />
                       {error?.priceError && 
                           <p className="text-red-500 text-base font-semibold">
                            {error.priceError}
                            </p> 
                         }
               </div>
               {/* -------------- Available Quantity ----------------*/}
               <div className="col-span-6 sm:col-span-3">
                   <label htmlFor="available-quantity" className="block text-sm font-medium text-white">
                        Available Quantity
                  </label>
                     <input
                        type="number"
                        name="availableQuantity"
                        placeholder='available quantity'
                        className="common-input-field"
                      />
                     {error?.availableQuantityError && 
                        <p className="text-red-500 text-base font-semibold">
                              {error.availableQuantityError}
                       </p> 
                     }
               </div>
               {/* ------------------- minimum Quantity -------------------- */}
               <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="country" className="block text-sm font-medium text-white">
                                Minimum Quantity
                      </label>
                     <input
                       type="number"
                       name="minimumQuantity"
                       placeholder=' minimum quantity'
                       className="common-input-field"
                       />
                         {error?.minimumQuantityError && 
                           <p className="text-red-500 text-base font-semibold">
                            {error.minimumQuantityError}
                            </p> 
                         }
               </div>
                {/* --------------- tool image --------------------*/}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-white">
                        Tool photo
                    </label>
                    <input type="text" name="toolPhoto" placeholder='upload photo ' className='w-full common-input-field' id="" />
                      {error?.toolPhotoError && 
                         <p className="text-red-500 text-base font-semibold">
                              {error.toolPhotoError}
                         </p> 
                      } 
               </div>   
               {/* -------------------- description --------------------*/}
               <div className='col-span-6 '>
                     <label htmlFor="about" className="block text-sm font-medium text-white">
                            Description
                      </label>
                    <div className="mt-1">
                         <textarea
                            name="description"
                            rows={4}
                            className="common-input-field"
                            placeholder="description"
                            defaultValue={''}
                        />
                      {error?.descriptionError && 
                           <p className="text-red-500 text-base font-semibold">
                              {error.descriptionError}
                          </p> 
                        }
                  </div>
               </div>
            </div>
              {/* -------------- button div ------------------------------ */}
            <div className="px-4 pt-3 text-center sm:px-6">
                <button type="submit" className="gradient-btn lg:w-1/4  w-2/4">
                    Submit
                </button>
            </div>
         </div>
     </form>
    );
};

export default AddTools;