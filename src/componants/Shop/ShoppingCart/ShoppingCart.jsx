import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteShoppingCart } from '../../../utilities/fakedb';
import Swal from 'sweetalert2';

const ShoppingCart = ({ cart, setCart }) => {

    let total = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const singleCart of cart) {
        quantity = quantity + singleCart.quantity
        total = total + singleCart.price * singleCart.quantity;
        shippingCharge += singleCart.shipping * singleCart.quantity;
    }
    let tax = Number((total * 0.1).toFixed(2));
    let grandTotal = total + shippingCharge + tax;

    const removeHandle = () => {
        setCart([]);
        deleteShoppingCart();
        Swal.fire(
            'All Selected item successfully removed',
            'You clicked the button!',
            'success'
        );

    }

    return (
        <div className='bg-gray-200 ' >
            <h1 className='text-center text-2xl font-semibold my-10'>Order Summary</h1>
            <div className='flex flex-col gap-y-3'>
                <div className='flex justify-between px-5'>
                    <p>Selected Items :</p> <p>{quantity}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Total Prices :</p> <p>${total}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Total Shipping Charge :</p> <p>${shippingCharge}  </p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Tax :</p> <p>${tax}</p>
                </div>
                <div className='flex justify-between px-5'>
                    <p>Grand Total :</p> <p>${grandTotal}</p>
                </div>
                <div className='flex justify-between px-5 mt-5'>
                    <button disabled={cart.length ? false : true} className="btn btn-outline border-red-500 border-2 text-red-500 hover:bg-red-500 hover:border-none hover:text-white  w-full px-5  duration-200" onClick={removeHandle}>
                        Remove All Items <FontAwesomeIcon icon={faTrash} className="ml-5" > </FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;