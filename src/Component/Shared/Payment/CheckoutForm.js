import React, { useEffect, useState } from 'react';
import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const CheckoutForm = ({tool ,user}) => {
    const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret,setClientSecret] = useState('');

  const { img , toolName , price , quantity , address , phone ,_id } = tool
  useEffect(()=> {
    if(price){
        fetch('http://localhost:5000/create-payment-intent', {
              method: 'POST',
               body: JSON.stringify({price}),
               headers: {
                         'Content-type': 'application/json; charset=UTF-8',
                         'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                  }})
                  .then((response) => response.json())
                  .then((result) => {
                      if(result.clientSecret){
                         setClientSecret(result.clientSecret)
                      }
               });
      
    }
  },[price]) 

    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error?.message){
          setCardError(error?.message)
        }
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      name: tool.name,
                      email: tool.email
                  },
              },
          },
      );
    if (intentError) {
         console.log('error',intentError.message);
         toast.error(intentError.message);
    }
    else {

        if(paymentIntent.id){
          const tranjectionId = paymentIntent?.id
          const amount = paymentIntent?.amount
          const sellAmount = {
            "name":user?.displayName ,
            "email": user?.email,
            "address":address,
            "phone": phone,
            "quantity":quantity,
            "img":img,
            "toolName":toolName,
            "price":price,
            "paid":{tranjectionId,amount}
        }
      
          fetch(`http://localhost:5000/moneypayment/${_id}`,{
            method:'PUT',
            body: JSON.stringify(sellAmount),
              headers:{'Content-type': 'application/json; charset=UTF-8'}
          })
          .then(res => res.json())
          .then(result => {
             if(result.modifiedCount > 0){
                toast.success('Successfully payment ')
                console.log(sellAmount)
                //  navigate('/dashboard')
             }
          })
        }
        
    }
    }
    return (
     <>
          <form onSubmit={handlePayment}>
             <CardElement
            options={{
            style: {
              base: {
                fontSize: '18px',
                color: '#fffff',
                width:'200px ',
                '::placeholder': {
                  color: '#fffff',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
           }}
        />
        <button type="submit" className='btn bg-green-600' disabled={!stripe || !clientSecret}>
          Pay
        </button>
         </form>
         {
            cardError && <p className='text-red-500'>{cardError}</p>
         }
     </>
   
    );
};

export default CheckoutForm;