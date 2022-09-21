import {  signOut } from 'firebase/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init'
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

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
    <div className="navbar bg-black/90 sm:px-5 px-2 sm:py-3 py-1 w-full shadow-lg border-b-4 border-pink-400">
        <div className="navbar-start lg:w-5/6  md:w-3/6 w-4/6 ">
             {/* -------------- small navigation -------------------- */}
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden p-0 pr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/home' className='text-xl px-2'>Home</Link>
                    <Link to='/blog' className='text-xl px-2'>Blog</Link>
                    <Link to='/portfolio' className='text-xl px-2'>My Portfolio</Link>
                    {
                        user && <>
                            <Link to='/dashBoard' className='text-xl px-2' px-2>
                                DashBoard
                            </Link>
                            <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                           </label> 
                        </>
                    } 
                      
                </ul>
            </div>
            {/*  ---------- website name ----------- */}
            <h2 className='text-2xl text-white sm:text-4xl xl:text-4xl lg:text-3xl font-medium font-serif xl:mx-7 lg:mx-2'>
                Bengal Tools
            </h2>
             {/*  ------------ large device block -------- */}
            <div className=" hidden lg:flex mx-4">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/home' className='text-xl text-white xl:mx-4 lg:mx-2'>
                        Home
                    </Link>
                    <Link to='/blog' className='text-xl text-white xl:mx-4 lg:mx-2'>
                        Blog
                    </Link>
                    <Link to='/portfolio' className='text-xl text-white xl:mx-4 lg:mx-2'>
                        My Portfolio
                    </Link>
                    {
                        user ?
                        <>
                         <Link to='/dashBoard' className='text-xl text-white xl:mx-4 lg:mx-2'>
                            DashBoard
                         </Link>
                           <button className='text-xl text-white px-2 sm:mx-10'
                           onClick={handleSignOut}>
                             Sign Out
                           </button>
                        </> : <Link to='/signIn' className='text-xl text-white px-2  sm:mx-10'>Sign In</Link>
                    }
                </ul>
           </div>
        </div>
        <div className="navbar-end lg:w-1/6 md:w-3/6 w-2/6">
               {
                user && <p className='text-white text-lg'>{user?.displayName}</p>         
               }
        </div>
    </div>
    );
};

export default Navbar;