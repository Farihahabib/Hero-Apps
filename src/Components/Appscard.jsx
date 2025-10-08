import React from 'react';
import App from '../App';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const Appscard = ({app}) => {
       console.log(app.id)
 const { title , ratingAvg , downloads ,image} = app;
    return (
            <div className=' rounded-xl hover:scale-103 transition ease-in-out'>
        <figure className='h-30 rounded-t-2xl overflow-hidden'>
             <img className='w-full  object-cover' src={image} alt="" />
        </figure>
   
     <h1 className='font-semibold text-2xl'>{title}</h1>
        <div className=' flex text-sm justify-between '>
           
                 <button className='rounded-xl  bg-green-100 flex justify-center items-center gap-1 text-green-600  px-4'><FaDownload />{ downloads }</button>
          
           
            <button className='rounded-xl  bg-orange-100 flex justify-center gap-1 items-center text-orange-500  px-4'><FaStar />{ratingAvg}</button>
        </div>

      </div>
       
      
    );
};

export default Appscard;