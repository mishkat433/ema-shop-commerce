import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';


const MainHome = () => {
    document.title = "Ema-Shop | Home";

    return (
        <div className='w-11/12 mx-auto'>
            <HomeBanner />
        </div>
    );
};

export default MainHome;