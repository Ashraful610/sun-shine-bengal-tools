import { useEffect, useState } from "react"
import Loading from "../Shared/Loading/Loading";

const useToken = (user) =>{
    const [token, setToken] = useState('');
    const email = user?.email;
    const name = user?.displayName
   
    useEffect( () =>{
        const currentUser = {email: email , name: name};

        if(name){
            fetch(`https://intense-journey-19881.herokuapp.com/newUser/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);

    return [token];
}

export default useToken;