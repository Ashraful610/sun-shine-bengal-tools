import React from 'react';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const AddTools = () => {
    const navigate = useNavigate();

   const handleAddTools = event =>{ 
       event.preventDefault();

       const toolName = event.target.toolName?.value
       const price = event.target.price?.value
       const availableQuantity = event.target.availableQuantity?.value
       const minimumQuantity = event.target.minimumQuantity?.value
       const description = event.target.description?.value
       const toolPhoto = event.target.toolPhoto?.value

       if(toolName  && price   && availableQuantity  && description  && toolPhoto  && minimumQuantity ) {
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
                toast.success('Successfully  add fruit')
                navigate('/home')
            });
       }
   }

    return ( 
     <form onSubmit={ handleAddTools} className='w-full min-h-[500px] h-fit px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/30'>
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
               </div>
                {/* --------------- tool image --------------------*/}
                <div className='col-span-6'>
                    <label className="block text-sm font-medium text-white">
                        Tool photo
                    </label>
                    <input type="text" name="toolPhoto" placeholder='upload photo ' className='w-full common-input-field' id="" />
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