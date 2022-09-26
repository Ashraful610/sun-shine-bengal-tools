import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useUser from '../../../Hooks/useUser';

const  Order = ({order }) => {
    const [paid , setPaid]=useState({})
    const {name ,toolName, img , price , quantity , _id ,address , email ,phone } = order
     
   useEffect(()=>{
    if(order?.paid?.amount){
        setPaid(order?.paid)
    }
   },[])
     


    const handleDelete = event => {
        event.preventDefault()
        
        fetch(`https://intense-journey-19881.herokuapp.com/soldTool/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( result => {
           if(result.deletedCount){
            toast.success(`Successfully deleted ${toolName}`)
           }
        })
    }
    const handleShift = event => {
        event.preventDefault()
        const newPaid = {...paid ,shift:true}
        const toolShift = {name:name , toolName:toolName , img:img , price :price , quantity:quantity ,address:address , email:email , phone:phone , paid:newPaid }

      fetch(`https://intense-journey-19881.herokuapp.com/moneypayment/${_id}`,{
        method:'PUT',
        body: JSON.stringify(toolShift),
        headers:{'Content-type': 'application/json; charset=UTF-8'}
       })
      .then(res => res.json())
      .then(result => {
        if(result.modifiedCount > 0){
          toast.success(`Successfully shipped ${toolName}`,{duration:6000, position:'top-right'})
          }
      })
        
    }
    return (
    <tr className="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4 w-32 ">
             <div className="avatar">
                 <div className="sm:w-20 w-16 rounded-full ring ring-orange-500  ring-offset-2">
                     <img src={img} />
                 </div>
             </div>
        </td>
        <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white border-x-4">
            <h2 className='lg:text-base text-sm'>Name : {toolName}</h2>
            <h2 className='lg:text-base text-sm'>Quantity : {quantity}</h2>
        </td>
        <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
             {
                paid?.amount ?  <p className="lg:text-lg text-base">TK : {paid?.amount}</p>:
                <p className="lg:text-lg text-base"> ${price}</p>
            }
        </td>
        <td className="py-4 lg:px-6 px-3 border-l-4">
          
           {
             paid?.amount ?
                <div>
                        {
                            paid?.shift ? <button className='btn bg-green-600 py-2 px-5 lg:text-lg text-base font-semibold'
                            onClick={handleShift}> 
                              Shipped
                            </button>: <button className='btn bg-green-600 py-2 px-5 lg:text-lg text-base font-semibold'
                            onClick={handleShift}> 
                              Pending...
                            </button> 
                        }  
               </div>
                 :
              <div className='flex'>
                 <button className='btn bg-yellow-400 py-2 px-5 lg:text-lg text-base font-semibold'>uppaid</button>
                 <button className='btn bg-red-700 py-2 px-5 lg:text-lg text-base font-semibold text-white mx-2' onClick={handleDelete}>
                     Delete
                   </button>
              </div>
           }
        </td>
    </tr>
    );
};

export default Order;