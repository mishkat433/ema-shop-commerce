import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DetailsModal from '../DetailsModal/DetailsModal';
import Product from '../Product/Product';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [details, setDetails] = useState([]);
    const [more, setMore] = useState(true);


    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCartHandle = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }
    const handleModal = detail => {
        setDetails(detail);
    }


    return (
        <div>
            <div className='flex flex-col-reverse lg:flex-row w-11/12 gap-5 mx-auto mt-10' >
                {/* product container */}
                <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-x-7 gap-y-10 ">
                    {
                        more ? products.slice(0, 21).map(product => <Product product={product} key={product.id} addToCartHandle={addToCartHandle} handleModal={handleModal}></Product>)
                            :
                            products.map(product => <Product product={product} key={product.id} addToCartHandle={addToCartHandle} handleModal={handleModal}></Product>)
                    }

                </div>

                {/* cart container */}
                <div className="cart-container bg-gray-200 w-full lg:w-1/5 rounded-xl h-[100vh]">
                    <ShoppingCart cart={cart} setCart={setCart} className="" />

                </div>
                <DetailsModal details={details} handleModal={handleModal}></DetailsModal>

            </div >

            <div className='flex justify-center my-10'>
                {
                    more ? <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xl" onClick={() => setMore(false)}>Show more...</button>
                        :
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xl" onClick={() => setMore(true)}>show less...</button>
                }
            </div>

        </div>
    );
};

export default Shop;