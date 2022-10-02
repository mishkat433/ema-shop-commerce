import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getFromLocalDb } from '../../../utilities/fakedb';
import DetailsModal from '../DetailsModal/DetailsModal';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Product from '../Product/Product';



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

    useEffect(() => {
        const getFromLocalCart = getFromLocalDb();
        const savedCart = [];
        for (const id in getFromLocalCart) {
            const findProduct = products.find(procuct => procuct.id === id);
            if (findProduct) {
                const quantity = getFromLocalCart[id]
                findProduct.quantity = quantity
                savedCart.push(findProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const addToCartHandle = (item) => {
        const exist = cart.find(product => product.id === item.id);
        let newCart = []
        if (!exist) {
            item.quantity = 1;
            newCart = [...cart, item]
        }
        else {
            const rest = cart.filter(product => product.id !== item.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);
        addToDb(item.id);
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
                <div className="cart-container bg-gray-200 w-full lg:w-1/5 rounded-xl pb-10 lg:pb-0 lg:h-[100vh] lg:sticky top-0">
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