import React, { useContext, useState } from 'react';
import loginImg from "../images/loginImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import useFirebase from './useFirebase';
import { AuthContex } from '../Contex/Contex';


const Login = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(true);
    const { user } = useContext(AuthContex);


    const { googleSigninHandle, githubSignInHandle, resetHandle, facebookSigninHanlde, faild, userLogin } = useFirebase();

    const submitHanlde = (e) => {
        if (user && user.uid) {
            alert("Already loged in");
        }
        else {
            const email = e.target.email.value;
            const password = e.target.password.value;
            userLogin(email, password);
        }
        e.preventDefault();
    }

    const passwordResetHandle = () => {
        resetHandle(email);
    }

    return (
        <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div className='w-1/2 hidden md:block'>
                <img src={loginImg} alt="Login" />
            </div>
            <div className='w-1/2 my-14'>
                {faild && <p className='text-red-500 mb-4 text-lg'>{faild}</p>}
                <div className='bg-cyan-700 w-3/5 p-5 rounded-xl'>
                    <form className='text-white text-md' onSubmit={submitHanlde}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2  ">Your email</label>
                            <input type="email" onChange={(em) => setEmail(em.target.value)} name="email" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5  " placeholder="Enter your name : " required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="block mb-2 ">Your password</label>
                            <input type={show ? "password" : "text"} name="password" className="bg-white border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 " placeholder="Enter your password : " required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input onClick={() => setShow(!show)} id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3" />
                            </div>
                            <label htmlFor="remember" className="ml-2 ">Show password</label>
                        </div>
                        <input type="submit" className="btn bg-orange-600 w-full" value="Login" />
                    </form>
                    <h4 className='mt-3 text-white inline-block'>Do not have an account? <Link className='text-cyan-100 btn btn-link pl-0 hover:text-cyan-50' to="/register">Please Register.</Link></h4>
                    <h4 className='mt-2 text-white cursor-pointer inline-block hover:text-cyan-100' onClick={passwordResetHandle}>Forgot your password?</h4>
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

export default Login;