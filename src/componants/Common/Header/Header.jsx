import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/Ema-shop-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import notFoundImage from "../../../images/notFound.png"
import { AuthContex } from '../../../Contex/Contex';



const Header = () => {
    const [bar, setBar] = useState(false);
    const { user, logOut } = useContext(AuthContex);

    const logoutHandle = () => {
        logOut();
    }

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
                <div className="flex-none">
                    <div className={`${bar ? "block absolute lg:static top-16 w-full  text-center px-3 pb-2 z-10 right-0 rounded-lg bg-cyan-800" : "hidden"} lg:block `}>
                        <ul className=" lg:flex lg:flex-row items-center gap-8 text-gray-200 text-md lg:text-lg" onClick={() => setBar(false)}>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/shop'>Shop</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/order'>Order</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/inventory'>Inventory</NavLink></li>
                            <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink to='/'>About</NavLink></li>
                            {
                                user?.uid ? <li className="dropdown dropdown">
                                    <div className="flex justify-end flex-1 ">
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="flex items-center gap-2">
                                                <img className='w-9 rounded-full' src={user?.photoURL ? user.photoURL : notFoundImage} alt="dashboard" />
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </label>
                                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 text-black text-lg rounded-lg mt-6">
                                                <li className=''><h4 className='pb-0 hover:bg-none'>{user.displayName}</h4>
                                                    <p className='text-sm pt-0 hover:bg-none'>{user.email} </p>
                                                </li>
                                                <li>
                                                    <h4 onClick={logoutHandle}>LogOut</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                    :
                                    <div className='flex flex-col lg:flex-row lg:gap-8'>
                                        <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/login'>Login</NavLink></li>
                                        <li className='hover:text-white duration-300 mb-3 lg:mb-0'><NavLink className={({ isActive }) => isActive ? "bg-white px-2 py-1 rounded-md  text-black" : undefined} to='/register'>Register</NavLink></li>
                                    </div>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;