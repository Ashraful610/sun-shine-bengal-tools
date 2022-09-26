import React, { useEffect, useState } from 'react';

const useUser = (user) => {
    const [profile , setProfile] = useState({})
    useEffect(()=>{
        fetch(`https://intense-journey-19881.herokuapp.com/user/${user?.email}`,{
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