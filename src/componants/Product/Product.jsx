import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { product, addToCartHandle } = props;
    const { name, seller, price, stock, ratings, img, category } = product;
    return (
        <div className="card bg-cyan-700 shadow-xl">
            <img className='w-full h-2/5' src={img} alt="figure not found" />
            <div className="card-body h-[50px] text-white mb-5">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between items-center mt-3 text-lg'>
                    <p className='font-semibold'>price : ${price} </p>
                    <p>Ratings : {ratings}<FontAwesomeIcon icon={faStar} className="text-orange-500" /></p>
                </div>
                <div className='flex justify-between items-center mt-3 w-full text-lg'>
                    <p>Seller: ${seller} </p>
                    <p>In Stock : {stock} </p>
                </div>
                <p className='mt-3 text-lg'>Category : {category}</p>

            </div>
            <button onClick={() => addToCartHandle(product)} className=" bg-cyan-500 py-3 w-full hover:bg-cyan-900 hover:text-white duration-300 text-black">Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div >
    );
};

export default Product;