import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init.js'
import Loading from '../Loading/Loading'
import toast from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Payment/CheckoutForm.js';


const stripePromise =  loadStripe('pk_test_51LkNUFACoQlhc0Qheeqb54AyxBdsEKOR1TgaWHkqyKu4OCl2llDQ9jibEnGFkAsoW0un7zJCzCHDQD44VE3O0VrC006XvsDFeC');


const BuyTool = () => {
    const {toolId} = useParams()
    const [tool , setTool] = useState({})
    const {name , price , availableQuantity ,minimumQuantity,img , description ,_id} = tool
    const [sellTool  , setSellTool] = useState({})
    
    const [user, loading, userError] = useAuthState(auth);
    const {displayName , email} = user
    const [error , setProblem] = useState(
        {nameError:'',addressError:'',phoneError:'',quantityError:''})
    const navigate = useNavigate();
// ---------- load single  tool------------
    useEffect(()=>{
        fetch(`http://localhost:5000/tool/${toolId}`)
        .then(res => res.json())
        .then(data => setTool(data))
        console.log(tool)
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
         
        if(!userName && !address && !phone && !quantity){
            setProblem({nameError:'name is required',addressError:'address is required',phoneError:'phone number is required',quantityError:'quantity is required'})
        }
        else if(userName === ''){
            setProblem({nameError:'name is required'})
        }
        else if(address === ''){
            setProblem({addressError:'address is required'})
        }
        else if(phone === ''){
            setProblem({phoneError:'phone number is required'})
        }
        else if(quantity === ''){
            setProblem({quantityError:'quantity number is required'})
        }
        else if( parseInt(quantity) < parseInt(minimumQuantity)){
            setProblem({ quantityError: `quantity must be greater than ${minimumQuantity}`})
        }
        else if( parseInt(quantity) > parseInt(availableQuantity)){
            setProblem({ quantityError: `you maximize order ${availableQuantity}`})
        }
        else{
            setProblem({})
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
            setSellTool(sellToolInfo)
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
                if(result.insertedId){
                    toast.success(`successfully buy ${name}`)
                }
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
             if(result.modifiedCount > 0){
                toast.success('update tool quantity')
             }
          })
        }   
    }
    return (
  <div className="sm:p-5 p-2 min-h-[510px] bg-black">
     <div className="w-full sm:min-h-[400px]  sm:max-h-[550px] min-h-[500px] h-fit max-h-[1300px] sm:flex ">
           {/* -------------- content -------------------------------- */}
        <div className="sm:w-2/4  w-full sm:h-[550px] h-full relative">
                {/* -------------- tool img -------------- */}
               <div className='w-full h-2/4'>
                  <img src={img} className='w-full min-h[200px] max-h-[270px]' alt="" />
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
         <div className='sm:w-2/4 w-full sm:h-[550px] h-full px-4 py-5 sm:p-6 backdrop-blur-sm bg-white/10'>
              <form onSubmit={handleSellTool} className=''>
                 <div className=" w-full ">
                      <div className="grid grid-cols-6 gap-6">
                  {/* --------------  name --------------------*/}
                  <div className="col-span-6 sm:col-span-3">
                       <label htmlFor="first-name" className="block text-sm font-medium text-white">Name</label>
                        <input type="text" name="name" placeholder='name'
                        className="common-input-field" defaultValue={displayName}/>
                           {
                    error?.nameError && <p className='text-base text-red-500'> {error.nameError}</p>
                  }
                  </div>
               
                  {/* -------------- email -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-white">Email</label>
                       <input type="email" name="email" placeholder='email'
                          className="common-input-field bg-slate-300" defaultValue={email} disabled/>
                  </div>
                  {/* -------------- address  ----------------*/}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-white">Address</label>
                      <input type="text" name="address" placeholder='address'
                        className="common-input-field"/>
                         {
                    error?.addressError && <p className='text-base text-red-500'> {error.addressError}</p>
                  }
                  </div>
                 
                  {/* ------------------- number -------------------- */}
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-white">Number</label>
                      <input type="number" name="number" placeholder='phone number'
                        className="common-input-field"/>
                          {
                    error?.phoneError && <p className='text-base text-red-500'> {error.phoneError}</p>
                  }
                  </div>
                
                   {/* --------------- tool quantity  --------------------*/}
                   <div className='col-span-6'>
                       <label className="block text-sm font-medium text-white">
                          Quantity
                       </label>
                       <input type="number" name="quantity" placeholder='tool quantity' className='w-full common-input-field' id="" />
                       {
                    error?.quantityError && <p className='text-base text-red-500'> {error.quantityError}</p>
                  } 
                  </div>  
                     </div>
                       {/* -------------- button div ------------------------------ */}
                     <div className="px-4 pt-3 text-center sm:px-6">
                       <button type="submit" className="btn bg-green-700 hover:bg-green-600 text-white px-2 py-1 lg:w-1/4  w-2/4">
                         Buy Now
                       </button>
                     </div> 
                 </div>
              </form>
             <div className="bg-white p-5 my-5">
              <Elements stripe={stripePromise}>
                        <CheckoutForm tool={sellTool} user={user} toolId={toolId}/>
             </Elements>
             </div>

         </div>
         
     </div>
  </div>
    );
};

export default BuyTool;