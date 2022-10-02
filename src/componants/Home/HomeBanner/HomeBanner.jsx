import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import thumbnails from "../../../images/shows copy.png"

const HomeBanner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:h-[80vh]'>
            <div className='lg:w-3/5'>
                <h1 className='text-3xl lg:text-6xl  lg:leading-normal'>Start Your journey <br /> as <span className='font-semibold text-orange-600'>Ema-Shop</span></h1>
                <p className=' lg:w-3/5 mt-3 text-justify'>Now a days the life style of the people is different. People feel uncomfortable and time consuming for going crowded markets. We guarantee of our product's authenticity and cover all kind of warranties.</p>
                <Link to="/shop"><button className="btn bg-cyan-800 hover:bg-orange-600 outline-none border-none mt-5 duration-300">Shop Now
                    <FontAwesomeIcon className='ml-4 animate-ping text-xl' icon={faArrowRight} /></button>  </Link>
            </div>
            <div className='lg:mr-20'>
                <img className='w-11/12 lg:w-full ' src={thumbnails} alt="shows" />
            </div>
        </div>
    );
};

export default HomeBanner;