import React from 'react';

const Order = ({order , user}) => {
    const {name ,toolName, img , price , quantity , _id} = order
    const handleDelete = event => {
        event.preventDefault()
        console.log(_id)
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
            <h2 className='lg:text-base text-sm'>Name : {name}</h2>
            <h2 className='lg:text-base text-sm'>Quantity : {quantity}</h2>
        </td>
        <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
            <p className="lg:text-lg text-base"> ${price}</p>
        </td>
        <td className="py-4 lg:px-6 px-3 border-l-4">
           <button className='lg:text-lg text-base font-semibold text-red-600 dark:text-red-500' onClick={handleDelete}>Remove</button>
        </td>
    </tr>
    );
};

export default Order;