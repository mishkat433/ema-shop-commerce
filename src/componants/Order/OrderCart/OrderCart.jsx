import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const OrderCart = ({ cart, removeHandle }) => {
    const { img, price, name, shipping, id, quantity } = cart
    return (
        <div>
            <div className='flex border-2 rounded-xl mb-3 p-1 justify-between items-center'>

                <div className='flex '>
                    <figure><img className='w-20 rounded-lg mr-4' src={img} alt="" /></figure>
                    <div>
                        <h2 className='text-2xl'>{name}</h2>
                        <p>Price : <span className='text-orange-500'>${price}</span></p>
                        <p>Shipping Charge : <span className='text-orange-500'>${shipping}</span></p>
                        <p>quantity : <span className='text-orange-500'>{quantity}</span></p>
                    </div>
                </div>
                <button onClick={() => removeHandle(id)} className='mr-3 text-red-500 text-2xl hover:bg-red-200 rounded-full w-12 h-12 duration-300'><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div >
    );
};

export default OrderCart;