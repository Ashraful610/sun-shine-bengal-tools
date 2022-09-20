import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

const ManageAllOrders = () => {
    const [allOrders , setAllOrders] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/soldTools')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    return (
   
     <div className='w-full h-full lg:py-5 p-5'>  
       <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
         <table className="w-full text-left  dark:text-gray-400">
           <thead className=" text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                 <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                            Photo
                 </th>
                  <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Order Details
                 </th>
                 <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Price
                 </th>
                 <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Action
                 </th>
              </tr>
           </thead>
           <tbody>
                 {
                        allOrders.map(order => <Order  key={order._id} order={order}/>)
                 }
           </tbody>
         </table>
       </div>  
     </div>
  
    );
};

export default ManageAllOrders;