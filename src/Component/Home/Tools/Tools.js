import React from 'react';
import useTools from '../../Hooks/useTools'
import Tool from './Tool/Tool';

const Tools = () => {
    const tools = useTools()
    return (
        <div className='w-full min-h-[500px] h-fit  py-8 px-5 bg-black/90'>
           <h2 className='text-5xl text-center  font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-sky-500'>
            Our Bengal Tools 
           </h2>
          <div className="w-full h-full py-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1
         gap-5">
            {
              tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
         </div>
    </div>
    );
};

export default Tools;