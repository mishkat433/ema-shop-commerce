import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from "../images/loginImage.png";
import useFirebase from './useFirebase';


const Register = () => {
    const [inputvalue, setInputValue] = useState({})
    const [show, setShow] = useState(true)

    const { googleSigninHandle, githubSignInHandle, createUser, facebookSigninHanlde, faild, setFaild } = useFirebase();

    const registerHandle = (e) => {
        e.preventDefault()
        if (inputvalue.password === inputvalue.confirm) {
            createUser(inputvalue.email, inputvalue.password, inputvalue.name);
            e.target.reset();
        }
        else {
            setFaild("new password and confirm password are not same");
        }
    }

    const inputHandle = (even) => {
        let isValid = true;

        if (even.target.name === "email") {
            isValid = /^\S+@\S+\.\S+$/.test(even.target.value)
        }
        if (even.target.name === "password") {
            const isValidLen = even.target.value.length >= 6
            const validPass = /\d{1}/.test(even.target.value)
            isValid = isValidLen && validPass
        }
        else {
            setFaild("password must be minimun 6 character and use atleast 1 digit.")
        }
        if (even.target.name === "confirm") {
            const isValidLen = even.target.value.length >= 6
            const validPass = /\d{1}/.test(even.target.value)
            isValid = isValidLen && validPass
        }
        if (isValid) {
            const store = { ...inputvalue };
            store[even.target.name] = even.target.value;
            setInputValue(store)
        }
    }


    return (
        <div className='w-11/12 mx-auto flex gap-10 justify-between items-center'>
            <div className='w-1/2 hidden md:block'>
                <img src={loginImg} alt="Login" />
            </div>
            <div className='w-1/2 mt-10 mb-14'>
                {faild && <p className='text-red-500 mb-4 text-lg'>{faild}</p>}
                <div className='bg-cyan-700 w-3/5 p-5 rounded-xl shadow-2xl  '>
                    <form className='text-white text-md' onSubmit={registerHandle}>
                        <div className="mb-3">
                            <label htmlFor="name" className="block mb-1  ">Your full name</label>
                            <input type="text" onBlur={inputHandle} name="name" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " placeholder="Enter your name : " required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-1  ">Your email</label>
                            <input type="email" onBlur={inputHandle} name="email" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " placeholder="Enter your email : " required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block mb-1 ">New password</label>
                            <input type={show ? "password" : "text"} onBlur={inputHandle} name="password" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5" placeholder='Enter a new password : ' required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirm" className="block mb-1 ">Confirm password</label>
                            <input type={show ? "password" : "text"} onBlur={inputHandle} name="confirm" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 " placeholder='Confirm : ' required />
                        </div>
                        <div className="flex items-start mb-4">
                            <div className="flex items-center h-5">
                                <input onClick={() => setShow(!show)} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3" />
                            </div>
                            <label htmlFor="remember" className="ml-2  ">Show password</label>
                        </div>

                        <input type="submit" className="btn bg-orange-600 w-full" value="Register" />
                    </form>
                    <h4 className=' text-white inline-block'>Already have an account? <Link className='text-cyan-100 btn btn-link pl-0  hover:text-cyan-50' to="/login">Login.</Link></h4>
                    <hr className='border-white my-2' />
                    <div className='text-white'>
                        <h4 className='text-xl text-center font-medium'>Login With</h4>
                        <div className='flex justify-around text-gray-300  text-4xl mt-3'>
                            <button onClick={facebookSigninHanlde} className="hover:text-white duration-300 hover:scale-110"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></button>
                            <button onClick={googleSigninHandle} className="hover:text-white duration-300 hover:scale-110"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
                            <button onClick={githubSignInHandle} className="hover:text-white duration-300 hover:scale-110"><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;