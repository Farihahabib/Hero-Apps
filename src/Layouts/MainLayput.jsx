import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayput = () => {
    return (
        <div className='flex flex-col min-h-screen'>
           <Navbar />
           <div className='max-w-screen-2xl w-full mx-auto  flex-1'> 
             <Outlet /></div>
        
           <Footer />
        </div>
    );
};

export default MainLayput;