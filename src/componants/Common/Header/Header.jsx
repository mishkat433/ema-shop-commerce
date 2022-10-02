import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/Ema-shop-logo.png";

const Header = () => {
    return (
        <div className='bg-cyan-800'>
            <div className="navbar w-11/12 mx-auto pb-4">
                <div className="flex-1">
                    <NavLink to='/'><img className='w-44' src={logo} alt="ema-shop-logo" /></NavLink>
                </div>
                <div className="flex-none">
                    <ul className="flex flex-row gap-8 text-gray-200 text-lg">
                        <li className='hover:text-white duration-300'><NavLink to='/'></NavLink></li>
                        <li className='hover:text-white duration-300'><NavLink to='/shop'>Shop</NavLink></li>
                        <li className='hover:text-white duration-300'><NavLink to='/'>Order</NavLink></li>
                        <li className='hover:text-white duration-300'><NavLink to='/'>Manage Inventory</NavLink></li>
                        <li className='hover:text-white duration-300'><NavLink to='/'>About</NavLink></li>
                        <li className='hover:text-white duration-300'><NavLink to='/'>Login</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;