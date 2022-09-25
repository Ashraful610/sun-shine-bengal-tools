import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import CheckoutForm from './CheckoutForm';

const stripePromise =  loadStripe('pk_test_51LkNUFACoQlhc0Qheeqb54AyxBdsEKOR1TgaWHkqyKu4OCl2llDQ9jibEnGFkAsoW0un7zJCzCHDQD44VE3O0VrC006XvsDFeC');


const Payment = () => {
    const [user, loading, userError] = useAuthState(auth);
    //  je tool er jonno payment kora hobe oi tool
    const { toolId } = useParams();
    const [tool ,setTool] = useState({})
    const { img , toolName , price , quantity } = tool

    useEffect(() => {
        fetch(`http://localhost:5000/soldTool/${toolId}`)
        .then(res => res.json())
        .then(tool => setTool(tool))
    },[])

    return (
     <div className='w-full min-h-[500px] h-fit max-h-[530px] xl:p-5 p-2  bg-black/90'> 
       <div className='w-full h-2/4 flex justify-center p-5 backdrop-blur-sm '>
            <img src={img} className='w-[200px] h-[200px] rounded-full' alt="" />
       </div>
        <div className='w-full min-h-[250px] h-2/4 sm:flex backdrop-blur-sm bg-white/20 xl:p-5 '>
            <div className='text-white text-xl p-5 xl:w-3/6 lg:w-2/6 w-full h-full'>
                        <h2>Your Tool : {toolName}</h2>
                        <h2>Pay Tool price : ${price}</h2>
                        <h2>Tool Quantity : {quantity}</h2>
            </div>
           <div className='xl:w-3/6 lg:w-4/6 p-5 lg:p-0  w-full h-full flex items-center justify-center'>
              <div className="card flex-shrink-0 bg-white  shadow-2xl bg-base-100">
                <div className="card-body ">
                   <Elements stripe={stripePromise}>
                        <CheckoutForm tool={tool} user={user}/>
                   </Elements>
                </div>
             </div>
           </div>
        </div> 
     </div>
    );
};

export default Payment;