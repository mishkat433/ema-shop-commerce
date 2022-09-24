import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCartHandle = (item) => {
        const newCart = [...cart, item];
        setCart(newCart)
    }

    return (
        <div className='flex flex-row w-11/12 gap-5 mx-auto ' >
            {/* product container */}
            <div className="w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-x-7 gap-y-10 mt-10">
                {
                    products.map(product => <Product product={product} key={product.id} addToCartHandle={addToCartHandle}></Product>)
                }
            </div>

            {/* cart container */}
            <div className="cart-container  w-1/5 bg-gray-200 h-[100vh]">
                <h1 className='text-center text-2xl font-semibold my-10'>Order Summary</h1>
                <div className='flex justify-between px-5'>
                    <p>Selected Items :</p> <p>{cart.length}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Total Prices :</p> <p>{cart[0].price}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Total Shipping Charge :</p> <p>{cart.length}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Tax :</p> <p>{cart.length}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Grand Total :</p> <p>{cart.length}</p>
                </div>

            </div>
        </div>
    );
};

export default Shop;