import React from 'react';

const Footer = () => {
    return (
        <div className='bg-cyan-800 p-2 fixed bottom-0  w-full'>
            <h4 className='text-center text-white text-md'>Developed by Mishk@t - {new Date().getFullYear()}</h4>
        </div>
    );
};

export default Footer;