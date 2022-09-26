import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const AddTools = () => {
    const navigate = useNavigate();
    const [error , setError] = useState({toolNameError:'',priceError:'',availableQuantityError:'',minimumQuantityError:'',descriptionError:'',toolPhotoError:''})

   const handleAddTools = event =>{ 
       event.preventDefault();

       const toolName = event.target.toolName?.value
       const price = parseInt(event.target.price?.value)
       const availableQuantity = parseInt(event.target.availableQuantity?.value)
       const minimumQuantity = parseInt(event.target.minimumQuantity?.value)
       const description = event.target.description?.value
       const toolPhoto = event.target.toolPhoto?.value
      
       if(!toolName && !price && !availableQuantity && !minimumQuantity && !description && !toolPhoto) {
        setError({toolNameError:'tool name is required',priceError:'tool price is required',availableQuantityError:'tool available quantity is required',minimumQuantityError:'tool minimum order quantity is required' ,descriptionError:'tool description is required',toolPhotoError:'tool photo is required'})
       }
       else if(!toolName){
        setError({toolNameError:'please give tool name '})
       }
       else if(!price ){
        setError({priceError:'please give tool price '})
       }
       else if(price < 0){
        setError({priceError:'please give positive tool price'})
       }
       else if(!availableQuantity){
        setError({availableQuantityError:'please give tool available quantity'})
       }
       else if(availableQuantity < 0){
        setError({availableQuantityError:'please give positive tool available quantity'})   
      }
       else if(minimumQuantity > availableQuantity){
        setError({minimumQuantityError:`please give minimum quantity maximum ${availableQuantity}`})
      }
       else if(availableQuantity < minimumQuantity){
        setError({availableQuantityError:`please give available  quantity minimum ${minimumQuantity}`})
       }
       else if(!minimumQuantity ){
        setError({minimumQuantityError:"please give minimum quantity"})
       }
       else if(minimumQuantity <0){
        setError({minimumQuantityError:'please give positive minimun quantity'}) 
       }
       else if(!description){
        setError({descriptionError:`please give description`})
       }
       else if(!toolPhoto){
        setError({toolPhotoError:`please give tool  photo`})
       }
       else {
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
                  'Content-type': 'application/json',
                  'authorization': `Bearer ${localStorage.getItem("accessToken")}`
             }})
            .then((response) => response.json())
            .then((json) => {
              console.log(json)
                toast.success(`Successfully  add  ${toolName}`)
                navigate('/home')
            });
       }
   }

    return ( 
     <form onSubmit={ handleAddTools} className='w-full min-h-[500px] h-fit px-4 py-5 sm:p-6 backdrop-blur-sm bg-slate-700'>
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
                     {
                            error?.toolNameError && <p className='text-base text-red-500'>{error.toolNameError}</p>
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
                     {
                            error?.priceError && <p className='text-base text-red-500'>{error.priceError}</p>
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
                      {
                            error?.availableQuantityError && <p className='text-base text-red-500'>{error.availableQuantityError}</p>
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
                       {
                         error?.minimumQuantityError && <p className='text-base text-red-500'>{error.minimumQuantityError}</p>
                       }
               </div>
                {/* --------------- tool image --------------------*/}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-white">
                        Tool photo
                    </label>
                    <input type="text" name="toolPhoto" placeholder='upload photo ' className='w-full common-input-field' id="" />
                    {
                            error?.toolPhotoError && <p className='text-base text-red-500'>{error.toolPhotoError}</p>
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
                        {
                            error?.descriptionError && <p className='text-base text-red-500'>{error.descriptionError}</p>
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