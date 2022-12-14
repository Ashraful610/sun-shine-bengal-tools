import React, { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState()
     useEffect(()=>{
        fetch('https://intense-journey-19881.herokuapp.com/tools')
        .then(res => res.json())
        .then( data => setTools(data))
     },[])
   
        return tools
};

export default useTools;