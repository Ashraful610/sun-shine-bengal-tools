import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

const ManageAllOrders = () => {
    const [allOrders , setAllOrders] = useState([])
    
    useEffect(()=>{
        fetch('https://intense-journey-19881.herokuapp.com/soldTools', {
          method: 'GET',
          headers:{
              'authorization': `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    return (
     <div className='w-full h-full px-5 h-[500px]'>  
       <div className="overflow-x-auto overflow-y-auto relative shadow-md sm:rounded-lg">
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