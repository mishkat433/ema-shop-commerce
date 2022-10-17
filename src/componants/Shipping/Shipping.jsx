import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContex } from '../../Contex/Contex';
import { deleteShoppingCart } from '../../utilities/fakedb';
// import confirm from "../../images/giphy.gif"

const OrderList = () => {
    const { user } = useContext(AuthContex);
    const [formData, stFormData] = useState({ emailFromLogin: user?.email });
    const [error, setError] = useState("");
    const { initialCart } = useLoaderData();
    const [carts, setCart] = useState(initialCart);

    const confirmFormHandle = (e) => {
        const prevData = { ...formData };
        prevData[e.target.name] = e.target.value;
        stFormData(prevData);
    }
    const confirmSubmitHandle = (ev) => {
        if (!formData.fullName) {
            return setError("name is not found");
        }
        else { setError("") }
        if (!formData.email) {
            return setError("email is not found");
        }
        else { setError("") }
        if (!formData.address) {
            return setError("address is not found");
        }
        else { setError("") }
        if (!formData.contact) {
            return setError("contact is not found");
        }
        else { setError("") }
        if (carts.length === 0) {
            return setError("please shop any product");
        }

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Thank you, your order is confirm",
            showConfirmButton: false,
            timer: 3000
        })

        ev.preventDefault()
        setCart([]);
        deleteShoppingCart();
        console.log(formData);
    }
    return (
        <div className='w-11/12 mx-auto'>
            {error && <h4 className='text-center text-red-500 mt-5'>{error}</h4>}
            <div className="hero h-full lg:min-h-[85vh] ">
                <div className="hero-content w-full md:w-4/5 mt-5 lg:mt-5 lg:pt-0 flex-col-reverse justify-between gap-x-20 md:mt-5 lg:mt-0 md:flex-row-reverse">
                    <div className="text-center lg:text-left w-2/5">
                        <h1 className="text-5xl font-bold">Payment</h1>
                        <button disabled={carts.length === 0 ? true : false} onClick={confirmSubmitHandle} className='btn btn-success w-full mt-20'>Confirm Order</button>
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full md:w-3/5">
                        <form className="card-body w-full pt-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name*</span>
                                </label>
                                <input onChange={confirmFormHandle} type="text" name='fullName' placeholder="full name " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input onChange={confirmFormHandle} name="email" type="email" placeholder="email " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address*</span>
                                </label>
                                <input onChange={confirmFormHandle} name="address" type="text" placeholder="address " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Number*</span>
                                </label>
                                <input onChange={confirmFormHandle} name="contact" type="number" placeholder="+880 " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea onChange={confirmFormHandle} name="comment" placeholder="write your comment here..." className="input input-bordered resize-none h-24" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderList;