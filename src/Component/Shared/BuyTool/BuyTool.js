import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const BuyTool = () => {
    const toolId = useParams()
    const [tool , setTool] = useState({})
    const {name , price , availableQuantity ,minimumQuantity,img , description } = tool
    const navigate = useNavigate();
    const [error , setError] = useState({
         nameError:'',
         emailError:'',
         addressError:'',
         phoneError:'',
         descriptionError:'',
         fruitsPhotoError:'',
        }
        )

    useEffect(()=>{
        fetch('http://localhost:5000/tool/6328cd370be0bf03278b5a66')
        .then(res => res.json())
        .then(data => setTool(data))
    },[])

    const handleFruitsAdd = event =>{ 
        event.preventDefault();
        const name = event.target.name?.value
        const email = event.target.email?.value
        const address = event.target.address?.value
        const phone = event.target.number?.value
        const description = event.target.description?.value
        const fruitPhoto = event.target.fruitPhoto?.value
        if(name === '' && email === '' && address === '' && phone === '' && description === '' && fruitPhoto === '') {
            setError({
                nameError:'name is required' ,
                emailError: 'email is required',
                addressError: 'address is required',
                phoneError: 'phone number is required',
                descriptionError: 'description is required', 
                fruitsPhotoError: 'fruits photo is required'
            })

        }
       else if(name === ''){
            setError({fruitsNameError:'fruits name is required'})
        }
        else if(email === ''){
            setError({priceError:'price is required'})
        }
        else if(address === ''){
            setError({supplierError:'supplier is required'})
        }
        else if(phone === ''){
            setError({quantityError:'quantity is required'})  
        }
        else if(description === '') {
                setError({descriptionError:'description is required'})
        }
        else if(fruitPhoto === '') {
            setError({fruitsPhotoError:'fruits photo is required'})
        }
        else{
            const sellToolInfo = {
            "name":name ,
            "email": email,
            "address":address,
            "phone": phone,
            "img": fruitPhoto,
            // "suplier": supplier
            }
            fetch('https://sleepy-crag-27771.herokuapp.com/fruit', {
            method: 'POST',
            body: JSON.stringify(sellToolInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                toast.success('Successfully buy tool')
            });

           navigate('/manageItem')

        }
    }
    return (
     <div className="w-full min-h-[500px] h-fit max-h-[1300px] sm:p-5 p-2 bg-black/90">
        <div className=" w-full h-full sm:flex  ">
           {/* -------------- content -------------------------------- */}
            <div className="sm:w-2/4 min-h-fit w-full relative">
               <div className='w-full h-2/4'>
                  <img src={img} className='w-full h-full' alt="" />
               </div>
               <div className='w-full h-2/4 backdrop-blur-sm bg-white/10 text-white text-lg p-5'>
                    <h2>Name : {name}</h2>
                    <h2>Price : ${price}</h2>
                    <h2>Minimum Order Quantity : {minimumQuantity}</h2>
                    <h2>Available Quantity : {availableQuantity}</h2>
                    <p>Description : {description}</p>
               </div>
            </div>
         {/* ------------------- form   */}
            <form onSubmit={handleFruitsAdd} className='sm:w-2/4 w-full px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/10'>
                 <div className=" w-full ">
                   <div className="grid grid-cols-6 gap-6">
                             {/* --------------  name --------------------*/}
                             <div className="col-span-6 sm:col-span-3">
                                 <label htmlFor="first-name" className="block text-sm font-medium text-white">Name</label>
                                 <input
                                     type="text"
                                     name="name"
                                     placeholder='name'
                                     className="common-input-field"
                                 />
                                {error?.fruitsNameError && 
                                <p className="text-red-500 text-base font-semibold">
                                 {error.fruitsNameError}
                                 </p> 
                                }
                             </div>
                             {/* -------------- email -------------------- */}
                             <div className="col-span-6 sm:col-span-3">
                                 <label htmlFor="last-name" className="block text-sm font-medium text-white">Email</label>
                                <input
                                 type="email"
                                 name="email"
                                 placeholder='email'
                                 className="common-input-field"
                                />
                                {error?.priceError && 
                                <p className="text-red-500 text-base font-semibold">
                                 {error.priceError}
                                 </p> 
                                }
                             </div>
                             {/* -------------- address  ----------------*/}
                             <div className="col-span-6 sm:col-span-3">
                                 <label htmlFor="email-address" className="block text-sm font-medium text-white">Address</label>
                                 <input
                                     type="text"
                                     name="address"
                                     placeholder='address'
                                     className="common-input-field"
                                 />
                                 {error?.supplierError && 
                                  <p className="text-red-500 text-base font-semibold">
                                     {error.supplierError}
                                 </p> 
                                 }
                             </div>
                             {/* ------------------- number -------------------- */}
                             <div className="col-span-6 sm:col-span-3">
                                 <label htmlFor="country" className="block text-sm font-medium text-white">Number</label>
                                 <input
                                     type="number"
                                     name="number"
                                     placeholder='phone number'
                                     className="common-input-field"
                                 />
                                 {error?.quantityError && 
                                <p className="text-red-500 text-base font-semibold">
                                 {error.quantityError}
                                 </p> 
                                }
                             </div>
                              {/* --------------- fruits image --------------------*/}
                              <div className='col-span-6'>
                                 <label className="block text-sm font-medium text-white">
                                     Fruits photo
                                 </label>
                                 <input type="text" name="fruitPhoto" placeholder='upload photo ' className='w-full common-input-field' id="" />
                                 {error?.fruitsPhotoError && 
                                           <p className="text-red-500 text-base font-semibold">
                                             {error.fruitsPhotoError}
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

        </div>
     </div>
    );
};

export default BuyTool;