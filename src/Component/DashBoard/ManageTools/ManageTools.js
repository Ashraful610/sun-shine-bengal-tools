import React, { useEffect, useState } from 'react';
import Tool from '../../Home/Tools/Tool/Tool';
import useTools from '../../Hooks/useTools';
import ManageTool from './ManageTool/ManageTool';

const ManageTools = () => {
    const [tools, setTools] = useState()
    
     useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then( data => setTools(data))
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
                                 Tool Details
                  </th>
                  <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                 Available Quantity
                  </th>
                  <th scope="col" className="lg:text-lg sm:text-base py-3 lg:px-6 px-3">
                                 Delete
                  </th>
               </tr>
            </thead>
            <tbody>
                  {
                         tools?.map(tool => <ManageTool key={tool._id} tool={tool} />)
                  }
            </tbody>
          </table>
        </div>  
      </div>
    );
};

export default ManageTools;