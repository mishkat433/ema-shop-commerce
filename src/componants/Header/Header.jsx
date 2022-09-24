import React from 'react';
import logo from "../../images/Ema-shop-logo.png";

const Header = () => {
    return (
        <div className='bg-cyan-800'>
            <div className="navbar w-11/12 mx-auto pb-4">
                <div className="flex-1">
                    <a href='/'><img className='w-44' src={logo} alt="ema-shop-logo" /></a>
                </div>
                <div className="flex-none">
                    <ul className="flex flex-row gap-8 text-gray-200 text-lg">
                        <li className='hover:text-white duration-300'><a href='/'>Shop</a></li>
                        <li className='hover:text-white duration-300'><a href='/'>Order</a></li>
                        <li className='hover:text-white duration-300'><a href='/'>Manage Inventory</a></li>
                        <li className='hover:text-white duration-300'><a href='/'>About</a></li>
                        <li className='hover:text-white duration-300'><a href='/'>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;