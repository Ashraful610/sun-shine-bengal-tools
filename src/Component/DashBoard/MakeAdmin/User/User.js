import React from 'react';
import toast from 'react-hot-toast';

const User = ({user}) => {
   const {email , role} = user

   const makeAdmin = event => {
      event.preventDefault();

      fetch(`http://localhost:5000/user/admin/${email}`, {
         method: 'PUT',
         headers:{
             'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }})
      .then(res =>{
            if(res.status === 403){
                 toast.error('Failed to Make an admin');
            }
           return res.json()})
      .then(data => {
         if(data.modifiedCount > 0) {
            toast.success('Successfully make a admin account')
         }
      })
   }
    return (
        <tr className="bg-white border-b-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
           <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white ">
             <h2 className='lg:text-base text-sm'>Name : {user?.name}</h2>
           </td>
           <td className="py-4 lg:px-6 px-3 font-semibold text-gray-900 dark:text-white   border-x-4">
              <p className="lg:text-lg text-base"> Email : {user?.email}</p>
            </td>
           <td className="py-4 lg:px-6 px-3 ">
            {
              role !== 'admin' && 
              <button className='lg:text-lg text-base font-semibold btn btn-success' onClick= {makeAdmin}>
              Make Admin
              </button>
            } 
         </td>
    </tr>
    );
};

export default User;