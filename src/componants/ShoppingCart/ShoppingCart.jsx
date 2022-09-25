import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = ({ cart, setCart }) => {


    return (
        <div className='bg-gray-200'>
            <h1 className='text-center text-2xl font-semibold my-10'>Order Summary</h1>
            <div className='flex flex-col gap-y-3'>
                <div className='flex justify-between px-5'>
                    <p>Selected Items :</p> <p>{cart.length}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Total Prices :</p> <p>0</p>

                </div>
                <div className='flex justify-between px-5'>
                    <p>Total Shipping Charge :</p> <p>0</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Tax :</p> <p>0</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Grand Total :</p> <p>0</p>
                </div>
                <div className='flex justify-between px-5 mt-5'>
                    <button className="btn btn-outline border-red-500 border-2 text-red-500 hover:bg-red-500 hover:border-none hover:text-white  w-full px-5  duration-200" onClick={() => setCart([])}>
                        Remove All Items <FontAwesomeIcon icon={faTrash} className="ml-5" > </FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;