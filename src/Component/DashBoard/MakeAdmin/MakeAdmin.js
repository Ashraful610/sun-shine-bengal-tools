import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from './User/User';

const MakeAdmin = () => {
    const [allUsers , setAllUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/users', {
          method: 'GET',
          headers:{
              'authorization': `Bearer ${localStorage.getItem("accessToken")}`
         }})
        .then(res => {
            if(res.statusCode === 401 || res.statusCode === 403) {
                 navigate('/home')
            }
             return res.json()})
        .then(users => setAllUsers(users))
    },[allUsers])

    return (
     <div>
        <div className='w-full h-full h-[500px] px-5'>  
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-left  dark:text-gray-400">
              <thead className=" text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                             Name
                  </th>
                   <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                Email
                  </th>
                  <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                 Make Admin
                  </th>
               </tr>
              </thead>
              <tbody>
                  {
                         allUsers?.map(user => <User  key={user._id} user={user}/>)
                  }
              </tbody>
            </table>
          </div>  
        </div>
     </div>
    );
};

export default MakeAdmin;