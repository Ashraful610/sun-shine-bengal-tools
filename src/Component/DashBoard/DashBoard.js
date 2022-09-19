import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
      navigate('/home')
    }
    return (   
    <div className="drawer drawer-mobile">
          <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            <h2 className='lg:text-3xl text-2xl text-secondary my-4 text-center'>
                Welcome to your Dashboard
            </h2>
              <Outlet></Outlet>           
          </div> 
          <div className="drawer-side w-[250px]">
             <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
              <ul className="menu p-4 overflow-y-auto bg-black/90 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                   <li>
                      <Link to="/dashboard" className='text-white'>
                        My Profile
                      </Link>
                   </li>
                   <li>
                      <Link to="/dashboard/myorder" className='text-white'>
                        My Order
                     </Link>
                   </li>
                   <li>
                      <Link to="/dashboard/updateProfile" className='text-white'>
                        Update Profile
                     </Link>
                   </li>
                   <li>
                      <Link to="/dashboard/myreview" className='text-white'>
                        Add A Review
                      </Link>
                   </li>
              </ul>               
          </div>
    </div>
    );
};

export default Dashboard;