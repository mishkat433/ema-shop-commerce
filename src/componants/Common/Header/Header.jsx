import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/Ema-shop-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [bar, setBar] = useState(false)
    return (
        <div className='bg-cyan-800'>
            <div className="navbar w-11/12 mx-auto pb-4">
                <div className="flex-1">
                    <NavLink to='/'><img className='w-44' src={logo} alt="ema-shop-logo" /></NavLink>
                </div>
                {
                    bar ? <FontAwesomeIcon className='text-white lg:hidden' icon={faClose} onClick={() => setBar(!bar)} /> :
                        <FontAwesomeIcon className='text-white lg:hidden' icon={faBars} onClick={() => setBar(!bar)} />
                }
                <div className="flex-none ">
                    <div className={`${bar ? "block absolute lg:static top-16  text-center px-3 pb-2 right-0 rounded-lg bg-cyan-800" : "hidden"} lg:block `}>
                        <ul className=" lg:flex lg:flex-row gap-8 text-gray-200 text-md lg:text-lg" onClick={() => setBar(false)}>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/shop'>Shop</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/order'>Order</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/inventory'>Inventory</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink to='/'>About</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink to='/'>Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;