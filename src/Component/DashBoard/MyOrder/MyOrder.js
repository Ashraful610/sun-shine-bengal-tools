import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Order from '../ManageAllOrders/Order/Order';

const MyOrder = () => {
    const [user, loading, userError] = useAuthState(auth);
    const [orders , setOrders] = useState([])
    const navigate = useNavigate()
    // console.log(orders)
console.log(orders)
  {
    const findvaleu = orders?.map(order => order?.paid)
    // console.log(findvaleu)
  }
    useEffect(()=>{
        fetch(`http://localhost:5000/soldTools/${user.email}`,{
          method: 'GET',
          headers:{
              'authorization': `Bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res => {
               if(res.statusCode === 401 || res.statusCode === 403) {
                    navigate('/home')
               }
                return res.json()})
        .then(data => {
            setOrders(data)
        })
        // console.log(orders)
    },[ ])
    
    if(loading){
      return <Loading></Loading>
    }
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
                    orders?.map(order => <Order  key={order._id} order={order}/>)
                  }
            </tbody>
          </table>
        </div>  
      </div>
    );
};

export default MyOrder;