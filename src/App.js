// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashbord';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Navbar from './componets/Navbar';
import PrivateRoute from './componets/PrivateRoute';
import About from './pages/about';
import Footer from './componets/Footer';
import Contact from './pages/contact';

function App() {

  //important
  const [isLogined, setIsLogined] = useState(false);

  return (

    <div className=' bg-slate-900 w-auto h-max overflow-hidden'>
      <Navbar setIsLogined={setIsLogined} isLogined={isLogined} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLogined={setIsLogined} />} />
        <Route path='/signup' element={<Signup setIsLogined={setIsLogined} />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={

        <PrivateRoute isLogined ={isLogined}>
          <Dashboard />
        </PrivateRoute>
      } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
