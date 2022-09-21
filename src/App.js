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
import MyOrder from './Component/DashBoard/MyOrder/MyOrder';
import RequireAuth from './Component/Shared/RequireAuth/RequireAuth'
import BuyTool from './Component/Shared/BuyTool/BuyTool';
import AddTools from './Component/DashBoard/AddTools/AddTools';
import MakeAdmin from './Component/DashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Component/DashBoard/ManageAllOrders/ManageAllOrders';
import ManageTools from './Component/DashBoard/ManageTools/ManageTools';
import EditProfile from './Component/DashBoard/MyProfile/EditProfile/EditProfile';
import AddReview from './Component/DashBoard/AddReview/AddReview';
import Payment from './Component/Shared/Payment/Payment';

function App() {
  return (
    <div className=''>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/blog' element={<Blog></Blog>}/>
          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}/>
          <Route path='/signIn' element={<SignIn></SignIn>}/>
          <Route path='/signUp' element={<SignUp></SignUp>}/>
          <Route path='/buyTool/:toolId' element={
             <RequireAuth>
                 <BuyTool></BuyTool>
             </RequireAuth>}>
            </Route>
          <Route path="/dashboard" element={<DashBoard></DashBoard>}>
              <Route index element={<MyProfile></MyProfile>}></Route>
              <Route path='addreview' element={<AddReview></AddReview>}></Route>             
              <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
              <Route path='payment/:toolId' element={<Payment></Payment>}></Route>
              <Route path='editProfile/:email' element={<EditProfile></EditProfile>}></Route>
              <Route path='manageOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
              <Route path='addTools' element={<AddTools></AddTools>}></Route>
              <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path='manageTools' element={<ManageTools></ManageTools>}></Route>
          </Route>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}/>
       </Routes>
       <Footer />
       <Toaster />
    </div>
  );
}

export default App;
