import React from 'react';
import App from '../App';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const Appscard = ({app}) => {
  
 const { title , ratingAvg , downloads ,image, id } = app;
    return (
       <>
            <Link to={`/app/${id}`} className=' shadow-2xl p-5 rounded-xl hover:scale-103 transition ease-in-out'>
        <figure className='h-30 rounded-t-xl overflow-hidden'>
             <img className='w-full  object-cover' src={image} alt="" />
        </figure>
   
     <h1 className='font-semibold text-2xl py-3'>{title}</h1>
        <div className=' flex text-sm justify-between '>
           
                 <button className='rounded-xl  bg-green-100 flex justify-center items-center gap-1 text-green-600  px-4'><FaDownload />{ downloads }</button>
          
           
            <button className='rounded-xl  bg-orange-100 flex justify-center gap-1 items-center text-orange-500  px-4'><FaStar />{ratingAvg}</button>
        </div>
</Link>
     
    </>
      
    );
};

export default Appscard;