import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../assets/hero.png'
import { FaDownload, FaStar } from 'react-icons/fa6';
const Banner = () => {
  const googleplay = "https://play.google.com/store/games?hl=en";
  const appstore = "https://www.apple.com/app-store/";
    return (
        <>
        <div className='text-center mt-20 space-y-4'>
           <h1 className='text-5xl font-bold'> We Build <br/>
  <span className='text-purple-500'>Productive</span> Apps
  </h1>
  <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
  <div className='flex justify-center gap-4'>
  
      <a href={googleplay} target='_blank' rel='noopener noreferrer' className="btn"> <span className='text-blue-500'><FaGooglePlay /></span> Google Play</a>
      <a href={appstore} target='_blank' rel='noopener noreferrer' className="btn"> <span className='text-blue-500'><FaAppStoreIos /></span> App Store</a>
  </div>
  <img className='flex justify-center items-center mx-auto' src={hero} alt="" />
  <div className=" sm:footer-horizontal w-100% relative top-[-14px] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10 ">
    <h1 className='font-bold text-3xl'>Trusted by Millions, Built for You</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <nav className='flex gap-4 justify-center items-center'>
        <div className='flex flex-col font-bold  '>
           <a className="text-lg">Total Downloads</a>
    <a className=" text-4xl">29.6M</a>
    <a className="text-lg">21% more than last month</a>
    </div>  
   <p className='text-4xl '><FaDownload /></p>
  </nav>
        <nav className='flex  justify-center gap-4 items-center'>
          <div className='flex flex-col font-bold  '>
    <a className="text-lg">Total Reviews</a>
    <a className=" text-4xl">906k</a>
    <a className="text-lg">46% more than last month</a>
    </div>
   <p className='text-4xl'><FaStar /></p> 
  </nav>
        <nav className='flex  justify-center items-center  gap-4 '>
    <div className='flex flex-col font-bold  '>
    <a className="text-lg">Active Apps</a>
    <a className="  text-4xl">132+</a>
    <a className="text-lg">31 more will Launch</a>
</div>
    <p className='text-4xl'><FaGooglePlay /></p>
  </nav>
    </div>
  
</div>
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-2xl'>Trending Apps</h1>
          <p className='text-gray-500 text-sm'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        </>
    );
};

export default Banner;