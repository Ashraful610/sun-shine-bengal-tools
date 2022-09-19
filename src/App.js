import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import MyPortfolio from './Component/MyPortfolio/MyPortfolio';
import Footer from './Component/Shared/Footer/Footer';
import Navbar from './Component/Shared/Navbar/Navbar';
import NotFoundPage from './Component/Shared/NotFoundPage/NotFoundPage';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUP/SignUp';
import DashBoard from './Component/DashBoard/DashBoard';
import MyProfile from './Component/DashBoard/MyProfile/MyProfile';
import MyReview from './Component/DashBoard/MyReview/MyReview';
import MyOrder from './Component/DashBoard/MyOrder/MyOrder';
import UpdateProfile from './Component/DashBoard/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div className=''>
       {/* <Navbar></Navbar> */}
       <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/blog' element={<Blog></Blog>}/>
          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}/>
          <Route path='signIn' element={<SignIn></SignIn>}/>
          <Route path='signUp' element={<SignUp></SignUp>}/>
          <Route path="/dashboard" element={<DashBoard></DashBoard>}>
                <Route index element={<MyProfile></MyProfile>}></Route>
                <Route path='myreview' element={<MyReview></MyReview>}></Route>             
                <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
                <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
            </Route>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}/>
       </Routes>
       {/* <Footer /> */}
       <Toaster />
    </div>
  );
}

export default App;
