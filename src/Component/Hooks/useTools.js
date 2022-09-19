import React, { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([])
     useEffect(()=>{
        fetch('https://sleepy-crag-27771.herokuapp.com/fruits')
        .then(res => res.json())
        .then( data => setTools(data))
     },[])
   
        return tools
};

export default useTools;