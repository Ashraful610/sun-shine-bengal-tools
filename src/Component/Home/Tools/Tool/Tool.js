import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {name , price , availableQuantity ,minimumQuantity,img , description ,_id} = tool
    const navigate = useNavigate()


    const handleTool = event => {
        event.preventDefault()
        navigate(`/buyTool/${_id}`)
    }
    return (
        <div className='w-full h-[400px] '>
            <div className='w-full h-2/4'>
                <img src={img} alt="" className='w-full h-full' />
            </div>
            {/* ---------- tool details --------------- */}
            <div className='w-full h-2/4 back-drop-sm bg-white/10 p-2'>
               <div>
                   <h2 className='text-xl text-white'>
                        Name : {name}
                    </h2>
                    <h2 className='text-xl text-white'>
                        Price : ${price}
                    </h2>
                    <h2 className='text-xl text-white'>
                        Available-Quantity : {availableQuantity}
                    </h2>
                    <h2 className='text-xl text-white'>
                        Minimum-Order-Quantity : {minimumQuantity}
                    </h2>
               </div>
               <div className='p-2 flex justify-center'>
                      <button className='btn main-btn w-2/4 ' onClick={handleTool}>
                        Buy Now
                      </button>
               </div>
            </div>
        </div>
    );
};

export default Tool;