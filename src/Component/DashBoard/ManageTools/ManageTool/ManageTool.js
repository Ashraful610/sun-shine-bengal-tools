import { info } from 'daisyui/src/colors/colorNames';
import React from 'react';
import { toast } from 'react-toastify';

const ManageTool = ({tool}) => {
    const {img , name , price , availableQuantity ,_id} = tool

    const handleDeleteTool = event => {
        event.preventDefault()
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
           })
        .then(res => res.json())
        .then(result => {
            console.log(result.deletedCount);
            if(result.deleteCount > 0) {
                toast.success(`Successfully deleted ${name}`)
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
            <h2 className='lg:text-base text-sm'>Name : {name}</h2>
            <h2 className='lg:text-base text-sm'>Price : ${price}</h2>
        </td>
        <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white">
            <p className="lg:text-lg text-base">Available Quantity: {availableQuantity}</p>
        </td>
        <td className="py-4 lg:px-6 px-3 border-l-4">
           <button className='lg:text-lg text-base font-semibold bg-red-500 text-white px-10 py-2' onClick={handleDeleteTool}>Delete</button>
        </td>
    </tr>
    );
};

export default ManageTool;