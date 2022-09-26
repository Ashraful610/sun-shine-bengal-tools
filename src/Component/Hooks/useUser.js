import React, { useEffect, useState } from 'react';

const useUser = (user) => {
    const [profile , setProfile] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`,{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(user => setProfile(user))
    },[user])
    return profile;
};

export default useUser;