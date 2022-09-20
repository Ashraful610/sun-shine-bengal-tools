import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth)
    const [ profile , setProfile] = useState({})
    const {email ,role} = profile

    const navigate = useNavigate()

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
    
    useEffect(() =>{
      if(!user){
        navigate('/home')
      }
      },[])

    if(loading){
        return <Loading></Loading>
    }
    return (   
    <div className="drawer drawer-mobile lg:p-5 bg-black h-fit">
          <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col min-h-[500px] h-fit">
              <Outlet></Outlet>           
          </div> 
          <div className="drawer-side w-[250px] min-h-[500px] h-fit mb-20 lg:bg-slate-800">
             <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label> 
              <ul className="menu p-4 overflow-y-auto text-base-content">
                        {/* <!-- Sidebar content here --> */}
                
           {/*---- ---------normal user ---------- */}
                  {
                    role !== 'admin' && <>
                    {/* --------my profile --------- */}
                     <li>
                      <Link to="/dashboard" className='text-white bg-slate-500 my-2'>
                          My Profile
                       </Link>
                     </li>
                    {/* ----------- my order ----------- */}
                      <li>      
                       <Link to="/dashboard/myorder" className='text-white bg-slate-500 my-2'>
                        My Order
                       </Link>
                      </li>
                     {/* ----------- add review -------------- */}
                      <li>
                       <Link to="/dashboard/addreview" className='text-white bg-slate-500 my-2'>
                        Add A Review
                        </Link>
                       </li>
                   </>
               }
               
                   {/* ---------- admin panel ----------- */}
               {
                role === 'admin' && <>
                   <li>
                      <Link to="/dashboard" className='text-white bg-slate-500 my-2'>
                          My Profile
                       </Link>
                   </li>
                      <li>
                        <Link to="/dashboard/addTools" className='text-white bg-slate-500 my-2'>
                          Add Tools
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/makeAdmin" className='text-white bg-slate-500 my-2'>
                          Make Admin
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/manageTools" className='text-white bg-slate-500 my-2'>
                         Manage Tools
                        </Link>
                      </li>
                    <li>
                        <Link to="/dashboard/manageOrders" className='text-white bg-slate-500 my-2'>
                          Manage All Orders
                        </Link>
                     </li>
                  </>
               }
              </ul>               
          </div>
    </div>
    );
};

export default Dashboard;