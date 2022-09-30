import React, { useEffect } from 'react';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Shop from './componants/Shop/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className=''>
      <Header />
      <Shop />
      <Footer />
    </div>
  );
};

export default App;
