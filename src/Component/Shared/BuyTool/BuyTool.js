import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init.js'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify';

const BuyTool = () => {
    const {toolId} = useParams()
    const [tool , setTool] = useState({})
    const {name , price , availableQuantity ,minimumQuantity,img , description } = tool

    const [user, loading, userError] = useAuthState(auth);
    const {displayName , email} = user

    const navigate = useNavigate();
    const [error , setError] = useState({
         nameError:'',
         emailError:'',
         addressError:'',
         phoneError:'',
         descriptionError:'',
         quantityError:'',
        }
        )
// ---------- load single  tool------------
    useEffect(()=>{
        fetch(`http://localhost:5000/tool/${toolId}`)
        .then(res => res.json())
        .then(data => setTool(data))
    },[availableQuantity])

    if(loading){
        return <Loading></Loading>
    }

    const handleSellTool = event =>{ 
        event.preventDefault();
        const userName = event.target.name?.value
        const email = event.target.email?.value
        const address = event.target.address?.value
        const phone = event.target.number?.value
        const description = event.target.description?.value
        const quantity = event.target.quantity?.value

        if(userName === '' && address === '' && phone === '' && quantity === '') {
            setError({
                nameError:'name is required' ,
                emailError: 'email is required',
                addressError: 'address is required',
                phoneError: 'phone number is required',
                // descriptionError: 'description is required', 
                quantityError: 'quantity is required'
            })

        }
       else if(userName === ''){
            setError({nameError:'fruits name is required'})
        }
        else if(email === ''){
            setError({emailError:'price is required'})
        }
        else if(address === ''){
            setError({addressError:'address is required'})
        }
        else if(phone === ''){
            setError({phoneError:'phone number is required'})  
        }
        // else if(description === '') {
        //         setError({descriptionError:'description is required'})
        // }
        else if(quantity === '') {
            setError({quantityError:'tool quantity is required'})
        }
        else if( parseInt(quantity) < parseInt(minimumQuantity)){
            setError({quantityError:`you minimun order ${minimumQuantity}`})
        }
        else if( parseInt(quantity) > parseInt(availableQuantity)){
            setError({quantityError:`you maximum order ${availableQuantity}`})
        }
        else{
            setError({quantityError:''});
            const newPrice = price * parseInt(quantity)
            const sellToolInfo = {
                "name":userName ,
                "email": email,
                "address":address,
                "phone": phone,
                "quantity":quantity,
                "img":img,
                "toolName":name,
                "price":newPrice
            }
            // ---------- for sellToolCollection api tool post---------
            fetch('http://localhost:5000/sellTool',{
              method: 'POST',
              body: JSON.stringify(sellToolInfo),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
             },
            })
            .then((response) => response.json())
            .then(result => {
                console.log(result)
            });
        
        // ----------- for toolsCollection update api  form tool update
        const newQuantity = parseInt(availableQuantity) - parseInt(quantity);
        const updateTool ={
                "name":name ,
                "img":img,
                "price":price,
                "description":description,
                "minimumQuantity":minimumQuantity,
                "availableQuantity":newQuantity,
        }
        fetch(`http://localhost:5000/tool/${toolId}`,{
            method:'PUT',
            body: JSON.stringify(updateTool),
              headers:{'Content-type': 'application/json; charset=UTF-8'}
          })
          .then(res => res.json())
          .then(result => {
            console.log(result)
          })

        }
    }
    return (
  <div className="w-full min-h-[500px] h-fit max-h-[1300px] sm:p-5 p-2 bg-black/90">
     <div className=" w-full h-full sm:flex  ">
           {/* -------------- content -------------------------------- */}
        <div className="sm:w-2/4 min-h-fit w-full relative">
                {/* -------------- tool img -------------- */}
               <div className='w-full h-2/4'>
                  <img src={img} className='w-full h-full' alt="" />
               </div>
               {/* --------tool details ------------- */}
               <div className='w-full h-2/4 backdrop-blur-sm bg-white/10 text-white text-lg p-5'>
                    <h2>Name : {name}</h2>
                    <h2>Price : ${price}</h2>
                    <h2>Minimum Order Quantity : {minimumQuantity}</h2>
                    <h2>Available Quantity : {availableQuantity}</h2>
                    <p>Description : {description}</p>
               </div>
        </div>
           {/* ------------------- form   */}
         <form onSubmit={handleSellTool} className='sm:w-2/4 w-full px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/10'>
            <div className=" w-full ">
               <div className="grid grid-cols-6 gap-6">
                  {/* --------------  name --------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                       <label htmlFor="first-name" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" name="name" placeholder='name'
                        className="common-input-field" defaultValue={displayName}/>
                        {error?.nameError && 
                           <p className="text-red-500 text-base font-semibold">
                             {error.nameError}
                            </p> 
                        }
                  </div>
                  {/* -------------- email -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-white">Email</label>
                       <input type="email" name="email" placeholder='email'
                          className="common-input-field" defaultValue={email} disabled/>
                         {error?.emailError && 
                          <p className="text-red-500 text-base font-semibold">
                            {error.emailError}
                          </p> 
                         }
                  </div>
                  {/* -------------- address  ----------------*/}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white">Address</label>
                      <input type="text" name="address" placeholder='address'
                        className="common-input-field"/>
                      {error?.addressError && 
                         <p className="text-red-500 text-base font-semibold">
                           {error.addressError}
                         </p> 
                     }
                  </div>
                  {/* ------------------- number -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-white">Number</label>
                      <input type="number" name="number" placeholder='phone number'
                        className="common-input-field"/>
                       {error?.phoneError && 
                          <p className="text-red-500 text-base font-semibold">
                            {error.phoneError}
                          </p> 
                      }
                  </div>
                   {/* --------------- tool quantity  --------------------*/}
                   <div className='col-span-6'>
                       <label className="block text-sm font-medium text-white">
                          Quantity
                       </label>
                       <input type="number" name="quantity" placeholder='tool quantity' className='w-full common-input-field' id="" />
                        {error?.quantityError && 
                          <p className="text-red-500 text-base font-semibold">
                               {error.quantityError}
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
                         Buy Now
                     </button>
              </div>
            </div>
        </form>
     </div>
  </div>
    );
};

export default BuyTool;