import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import hero from '../assets/hero.png'
const Banner = () => {
  const googleplay = "https://play.google.com/store/games?hl=en";
  const appstore = "https://www.google.com/search?sca_esv=3a35777a407e1553&rlz=1C1CHBD_enBD1118BD1118&sxsrf=AE3TifN7ISyhewnOMxqC4aT-GMg191a1kw:1759929379722&q=app+store+software&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZud1z6kQpMfoEdCJxnpm_3b1rh8tmijoxabUcIQACXBOhbjcze_mXzl4wah0udzAJEdvo0yBxhLYwcbUG0ST1oyQpGSyFa6kHs_L98AtepWJ5nn9L8D3q3r7sh6-5rx7hi1HC0mfYX6pDXk5lfvTe4uCnjs7isn549B-gpMZ88_rjdM2gc_HeXr5VgUbvdIlXncUQuA&sa=X&ved=2ahUKEwiCjojs15SQAxXSSmwGHU7MBjQQ0pQJegQIDhAB&biw=1232&bih=584&dpr=1.5";
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
        <nav className='flex flex-col gap-4 font-bold'>
    <a className="text-lg">Total Downloads</a>
    <a className=" text-6xl">29.6M</a>
    <a className="text-lg">21% more than last month</a>
  </nav>
        <nav className='flex flex-col  gap-4 font-bold'>
    <a className="text-lg">Total Reviews</a>
    <a className=" text-6xl">906k</a>
    <a className="text-lg">46% more than last month</a>
  </nav>
        <nav className='flex flex-col  gap-4 font-bold'>
    <a className="text-lg">Active Apps</a>
    <a className="  text-6xl">132+</a>
    <a className="text-lg">31 more will Launch</a>
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