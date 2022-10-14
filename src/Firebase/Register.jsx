import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import loginImg from "../images/loginImage.png";
import app from './Firebase.init';
import useFirebase from './useFirebase';


const auth = getAuth(app)

const Register = () => {
    const [inputvalue, setInputValue] = useState({})
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)

    const { googleSigninHandle, githubSignInHandle, facebookSigninHanlde, faild } = useFirebase();

    const registerHandle = (e) => {
        e.preventDefault()
        if (inputvalue.password === inputvalue.confirm) {
            createUserWithEmailAndPassword(auth, inputvalue.email, inputvalue.password)
                .then(result => {
                    updateuser();
                    emailVerify();
                    Swal.fire(
                        'Check your email inbox or spam box  and verify',
                    );
                    e.target.reset();
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message)
                })
            setError('')
        }
        else {
            setError("new password and confirm password are not same")
        }
    }

    const updateuser = () => {
        updateProfile(auth.currentUser, { displayName: inputvalue.name })
            .then(result => { })
            .catch(err => { console.log(err.message) })
    }

    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(res => { })
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
                {error && <p className='text-red-500 mb-4 text-lg'>{error}</p>}
                {faild && <p className='text-red-500 mb-4 text-lg'>{faild}</p>}
                <div className='bg-cyan-700 w-3/5 p-5 rounded-xl shadow-2xl  '>
                    <form className='text-white text-md' onSubmit={registerHandle}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2  ">Your full name</label>
                            <input type="text" onBlur={inputHandle} name="name" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " placeholder="Enter your name : " required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2  ">Your email</label>
                            <input type="email" onBlur={inputHandle} name="email" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " placeholder="Enter your email : " required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 ">New password</label>
                            <input type={show ? "password" : "text"} onBlur={inputHandle} name="password" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5" placeholder='Enter a new password : ' required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirm" className="block mb-2 ">Confirm password</label>
                            <input type={show ? "password" : "text"} onBlur={inputHandle} name="confirm" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 " placeholder='Confirm : ' required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input onClick={() => setShow(!show)} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3" />
                            </div>
                            <label htmlFor="remember" className="ml-2  ">Show password</label>
                        </div>

                        <input type="submit" className="btn bg-orange-600 w-full" value="Register" />
                    </form>
                    <h4 className='mt-3 text-white inline-block'>Already have an account? <Link className='text-cyan-100 hover:text-cyan-50' to="/login">Login.</Link></h4>
                    <hr className='border-white border-spacing-2 my-6' />
                    <div className='text-white'>
                        <h4 className='text-xl text-center font-medium'>Login With</h4>
                        <div className='flex justify-around text-gray-300  text-4xl mt-5'>
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