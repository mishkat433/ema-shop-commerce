import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componants/Common/Footer/Footer';
import Header from '../componants/Common/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;