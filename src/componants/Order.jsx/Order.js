import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import ShoppingCart from '../Shop/ShoppingCart/ShoppingCart';
import OrderCart from './OrderCart/OrderCart';

const Order = () => {
    const { initialCart } = useLoaderData();
    const [carts, setCart] = useState(initialCart)

    const removeHandle = (id) => {
        const remaining = carts.filter(cart => cart.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }


    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row mb-12'>
            {
                carts.length === 0 && <h2 className='text-2xl text-center w-3/5 mt-32'>Product not fount, Please <Link to="/shop" className='text-blue-500'>Shop more</Link></h2>
            }
            <div className='flex flex-col-reverse lg:flex-row w-11/12 gap-6 mx-auto mt-10' >
                {/* product container */}

                <div className='w-3/5'>
                    {
                        carts.map(cart => <OrderCart cart={cart} key={cart.id} removeHandle={removeHandle} />)
                    }
                </div>

                {/* cart container */}
                <div className="cart-container  w-full lg:w-2/5 rounded-xl pb-10 lg:pb-0 lg:h-[100vh] lg:sticky top-0 ">
                    <ShoppingCart cart={carts} setCart={setCart}>
                        <Link to="/confirm"><div className='flex justify-between px-5 mt-5'>
                            <button className="btn   bg-cyan-700 border-2 hover:scale-110 hover:bg-cyan-500 border-none hover:text-white  w-full px-5  duration-200" onClick={removeHandle}>
                                Confirm Order </button>
                        </div></Link>
                    </ShoppingCart>
                </div>
            </div >
        </div>
    );
};

export default Order;