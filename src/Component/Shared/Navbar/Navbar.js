import {  signOut } from 'firebase/auth';
import { NavLink} from "react-router-dom";
import auth from '../../../firebase.init'
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import './Navbar.css'

const Navbar = () => {
    const [user, userLoading, error] = useAuthState(auth);

    //  handle sign out
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            toast.success(`${user.email} successfully signed out`,);
            localStorage.removeItem('accessToken')
          })
        .catch((error) => {
            toast.error(error.message, );
          });
        }        

    if(userLoading){
        return <Loading></Loading>
    }

    return (
   <div className=" ">
     <div className="navbar bg-black/90 sm:px-5 px-2 sm:py-3 py-1 w-full shadow-lg border-b-2 border-green-500 ">
   <div className="navbar-start lg:w-5/6  md:w-3/6 w-4/6 ">
       {/* -------------- small navigation -------------------- */}
      <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost xl:hidden p-0 pr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to='/home' className='text-base text-white style border-x-4 border-white px-8 py-2 common-bg '>
                        Home
             </NavLink>
             <NavLink to='/blog' className='text-base text-white style  px-8 py-2 common-bg'>
                        Blog
             </NavLink>
             <NavLink to='/portfolio' className='text-base text-white style border-x-4 border-white px-8 py-2 common-bg'>
                        My Portfolio
             </NavLink>
             {
                 user ?
                     <>
                   <NavLink to='/dashBoard' className='text-base text-white style   px-8 py-2 common-bg'>
                      DashBoard
                    </NavLink>
                     <button className='text-base text-white style border-x-4 border-white  px-8 py-2 common-bg'
                           onClick={handleSignOut}>
                             Sign Out
                      </button>
                  </> : <NavLink to='/signIn' className='text-base text-white  style border-r-4 border-white px-8 py-2 common-bg'>Sign In</NavLink>
             }
              <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>              
            </ul>
      </div>
      {/*  ---------- website name ----------- */}
      <h2 className='website-name '>
                Bengal Tools
      </h2>
       {/*  ------------ large device block -------- */}
      <div className=" hidden xl:flex ">
         <ul className="menu menu-horizontal p-0">
             <NavLink to='/home' className='text-base text-white style border-x-4 border-white px-8 py-2 common-bg '>
                        Home
             </NavLink>
             <NavLink to='/blog' className='text-base text-white style  px-8 py-2 common-bg'>
                        Blog
             </NavLink>
             <NavLink to='/portfolio' className='text-base text-white style border-x-4 border-white px-8 py-2 common-bg'>
                        My Portfolio
             </NavLink>
             {
                 user ?
                     <>
                   <NavLink to='/dashBoard' className='text-base text-white style   px-8 py-2 common-bg'>
                      DashBoard
                    </NavLink>
                     <button className='text-base text-white style border-x-4 border-white  px-8 py-2 common-bg'
                           onClick={handleSignOut}>
                             Sign Out
                      </button>
                  </> : <NavLink to='/signIn' className='text-base text-white  style border-r-4 border-white px-8 py-2 common-bg'>Sign In</NavLink>
             }
         </ul>
      </div>
   </div>

   {user && 
       <div className="navbar-end hidden sm:flex lg:w-1/6 md:w-2/6 w-2/6 common-bg px-4 py-1 border-r-4 rounded border-white">
          {
            (user?.photoURL) ? 
            <img src={user?.photoURL} className='w-[30px] h-[30px] mx-2 rounded-full' alt="" /> : <img src='https://i.ibb.co/Pgz5CV9/user-account-management-logo-user-icon-11562867145a56rus2zwu.png' className='w-[30px] h-[30px] rounded-full mx-2' alt="" />
          }
          {
          user && <p className='text-white text-base '>{user?.displayName}</p>         
          }
   </div>
   }
  
    </div>
   </div>
 
    );
};

export default Navbar;