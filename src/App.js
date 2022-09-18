import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import MyPortfolio from './Component/MyPortfolio/MyPortfolio';
import Navbar from './Component/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='lg:p-5 '>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Home></Home>}/>
          <Route path='/blog' element={<Blog></Blog>}/>
          <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}/>
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
