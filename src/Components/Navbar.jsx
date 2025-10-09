import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import  logo  from '../assets/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";
const Navbar = () => {
  const mygithubid = "https://github.com/Farihahabib";
    return (
        <div>
         <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
        <NavLink to="/" >Home</NavLink>
      </li>
    
      <li>
        <NavLink to="/Apps">Apps</NavLink>
      </li>
    
      <li>
        <NavLink to="/Installation">Installation</NavLink>
      </li>
      </ul>
    </div>
    <NavLink className="btn flex btn-ghost text-xl">
       <img className='w-6' src={logo} alt="" />
        <h1>HERO.IO</h1>
        </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/" className="font-semibold text-[1.11rem]"> <IoHomeOutline />Home</NavLink>
      </li>
    
      <li>
        <NavLink to="/Apps" className="font-semibold text-[1.11rem]"><FaAppStore />Apps</NavLink>
      </li>
    
      <li>
        <NavLink to="/Installation" className="font-semibold text-[1.11rem]"><MdOutlineInstallDesktop />Installation</NavLink>
      </li>
    
    </ul>
  </div>
  <div className="navbar-end">
    <a href={mygithubid} target='_blank' rel='noopener noreferrer' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub /> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;