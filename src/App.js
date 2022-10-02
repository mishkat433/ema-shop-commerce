import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './componants/Common/Footer/Footer';
import Header from './componants/Common/Header/Header';
import Shop from './componants/Shop/Mainshop/Shop';
import MainHome from './componants/Home/MainHome/MainHome';

const App = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/inventory' element={<Shop />} />
      </Routes>
      <Footer></Footer>
    </div >
  );
};

export default App;
