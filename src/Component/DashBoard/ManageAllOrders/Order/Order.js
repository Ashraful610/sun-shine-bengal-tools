import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const   Order = ({order , user}) => {
    const [paid , setPaid]=useState({})
    const {name ,toolName, img , price , quantity , _id } = order
    

    useEffect(()=>{
        if(order?.paid){
            setPaid(paid)
            console.log(paid?.tranjectionId, paid)
        }
      },[price])


    const handleDelete = event => {
        event.preventDefault()
        
        fetch(`http://localhost:5000/soldTool/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( result => {
           if(result.deletedCount){
            toast.success(`Successfully deleted ${toolName}`)
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
            <p className="lg:text-lg text-base"> ${price}</p>
        </td>
        <td className="py-4 lg:px-6 px-3 border-l-4">
           {
            paid?.transjectionId ?
             <button className='btn bg-green-500 py-2 px-5 lg:text-lg text-base font-semibold'>{paid.tranjectionId}
              </button> :
            <button className='btn bg-red-600 py-2 px-5 lg:text-lg text-base font-semibold text-white mx-2' onClick={handleDelete}>
                    Delete
            </button>
           
           }
           {
              (!paid?.tranjectionId )&& <Link to={`/dashboard/payment/${_id}`}>
                <button className='btn bg-green-600 py-2 px-5 lg:text-lg text-base font-semibold text-white mx-2'>
                    Pay
                </button>
            </Link>
           }
           {/* {
            (price && order?.pay) && 
                <button className='btn bg-green-500 py-2 px-5 lg:text-lg text-base font-semibold text-white mx-2'>Peanding</button>
           } */}
        </td>
    </tr>
    );
};

export default Order;