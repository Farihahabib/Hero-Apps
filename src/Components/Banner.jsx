import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../assets/hero.png'
const Banner = () => {
    return (
        <>
        <div className='text-center mt-20 space-y-4'>
           <h1 className='text-5xl font-bold'> We Build <br/>
  <span className='text-purple-500'>Productive</span> Apps
  </h1>
  <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
  <div className='flex justify-center gap-4'>
    <button className="btn"> <span className='text-blue-500'><FaGooglePlay /></span> Google Play</button>
    <button className="btn"> <span className='text-blue-500'><FaAppStoreIos /></span> App Store</button>
  </div>
  <img className='flex justify-center items-center mx-auto' src={hero} alt="" />
  <div className=" sm:footer-horizontal w-100% relative top-[-14px] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10 ">
    <h1 className='font-bold text-3xl'>Trusted by Millions, Built for You</h1>
    <div className="grid grid-flow-col gap-8 mt-8">
        <nav className='flex flex-col gap-4 font-bold'>
    <a className="">Total Downloads</a>
    <a className=" text-6xl">29.6M</a>
    <a className="">21% more than last month</a>
  </nav>
        <nav className='flex flex-col  gap-4 font-bold'>
    <a className="">Total Reviews</a>
    <a className=" text-6xl">906k</a>
    <a className="">46% more than last month</a>
  </nav>
        <nav className='flex flex-col  gap-4 font-bold'>
    <a className="">Active Apps</a>
    <a className="  text-6xl">132+</a>
    <a className="">31 more will Launch</a>
  </nav>
    </div>
  
</div>
        </div>
        </>
    );
};

export default Banner;