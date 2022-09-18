import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import MyPortfolio from './Component/MyPortfolio/MyPortfolio';
import Footer from './Component/Shared/Footer/Footer';
import Navbar from './Component/Shared/Navbar/Navbar';
import NotFoundPage from './Component/Shared/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className=''>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/blog' element={<Blog></Blog>}/>
          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}/>

          <Route path='*' element={<NotFoundPage></NotFoundPage>}/>
       </Routes>
       <Footer />
       <ToastContainer />
    </div>
  );
}

export default App;
