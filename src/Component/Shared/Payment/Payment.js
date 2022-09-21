import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { toolId } = useParams();
    const [tool ,setTool] = useState({})
    const { img , toolName , price , quantity } = tool

    useEffect(() => {
        fetch(`http://localhost:5000/soldTool/${toolId}`)
        .then(res => res.json())
        .then(tool => setTool(tool))
    },[])

    return (
     <div className='w-full min-h-[500px] h-fit max-h-[500px] p-5'> 
       <div className='w-full h-2/4 flex justify-center p-5 backdrop-blur-sm bg-white/10'>
                    <img src={img} className='w-[200px] h-[200px] rounded-full' alt="" />
       </div>
        <div className='w-full min-h-[240px] h-2/4 sm:flex backdrop-blur-sm bg-white/20'>
          <div className='text-white text-xl p-5 sm:w-2/4 w-full'>
                        <h2>Tool Name : {toolName}</h2>
                        <h2>Tool price : {price}</h2>
                        <h2>Tool Quantity : {quantity}</h2>
          </div>
           <div className='sm:w-2/4 w-full'>

           </div>
        </div> 
     </div>
    );
};

export default Payment;