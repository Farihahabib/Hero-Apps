import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import imgerror from '../assets/error-404.png'
const Error = () => {
    const error = useRouteError();
    return (
        <>
        <Navbar></Navbar>
        <div className='w-1/2 mx-auto my-15 flex flex-col'>
          <img className='w-1/3 flex mx-auto' src={imgerror} alt="error" />
            <h1 className='font-semibold text-4xl mx-auto'>Oops , {error.message} </h1>
            <p className='font-medium text-sm mx-auto py-3'>The page you are looking for is not available.</p>
            <button className='bg-blue-600 text-white w-1/3 py-2 rounded-lg flex mx-auto text-center  mt-3 hover:bg-gray-500'>Go Back</button>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Error;