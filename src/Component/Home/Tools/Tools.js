import React from 'react';
import useTools from '../../Hooks/useTools'
import Loading from '../../Shared/Loading/Loading';
import Tool from './Tool/Tool';
import Fade from 'react-reveal/Fade';

const Tools = () => {
    const tools = useTools()
    if(!tools){
      return <Loading />
    }
    return (
        <div className='w-full min-h-[500px] h-fit  py-8 px-5 bg-black/90'>
          <Fade left>
          <h2 className='text-5xl text-center banner-heading'>
            Our Bengal Tools 
           </h2>
          </Fade>
       
          <div className="w-full h-full py-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1
         gap-5">
            {
              tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
         </div>
    </div>
    );
};

export default Tools;