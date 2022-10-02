import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/Ema-shop-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [bar, setBar] = useState(true)
    return (
        <div className='bg-cyan-800'>
            <div className="navbar w-11/12 mx-auto pb-4">
                <div className="flex-1">
                    <NavLink to='/'><img className='w-44' src={logo} alt="ema-shop-logo" /></NavLink>
                </div>
                <FontAwesomeIcon className='text-white lg:hidden' icon={faBarChart} onClick={() => setBar(!bar)} />
                <div className="flex-none">


                    <div className={`${bar ? "block absolute top-16 text-center px-3 pb-2 right-0  bg-cyan-800" : "hidden"} lg:block `}>
                        <ul className=" lg:flex lg:flex-row gap-8 text-gray-200 text-lg ">
                            <li className='hover:text-white duration-300'><NavLink to='/'></NavLink></li>
                            <li className='hover:text-white duration-300'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/shop'>Shop</NavLink></li>
                            <li className='hover:text-white duration-300'><NavLink to='/'>Order</NavLink></li>
                            <li className='hover:text-white duration-300'><NavLink to='/'>Manage Inventory</NavLink></li>
                            <li className='hover:text-white duration-300'><NavLink to='/'>About</NavLink></li>
                            <li className='hover:text-white duration-300'><NavLink to='/'>Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Header;