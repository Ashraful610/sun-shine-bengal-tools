import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init.js'
import Loading from '../Loading/Loading'

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, userLoading, error] = useAuthState(auth);
    if(userLoading){
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />;
    }

   return children;
};

export default RequireAuth;