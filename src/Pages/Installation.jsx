import React, { useEffect, useState } from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa"
const Installation = () => {
    const [InstallList ,setInstallList] = useState([]);
    useEffect(() =>{
        const savedlist = JSON.parse(localStorage.getItem('Installation'))
        if (savedlist) setInstallList(savedlist)
    },[])
    return (
        <div>
            <div className='flex justify-between my-6'>
            <h1>Installed Apps: {InstallList.length}</h1>
            <button>Sort</button>
            </div>
            <div className='space-y-3'>
                {
                    InstallList.map(a=>(
                          <div className='my-5 flex p-2 shadow-2xl rounded-2xl justify-between hover:scale-102 transition ease-in-out mx-20'>
                       
<div className="left flex">

     <figure className='h-30 w-1/10 rounded-t-xl overflow-hidden'>             <img className='w-3/4  object-cover' src={a.image} alt="" />
         </figure>
         <div>
             <h1 className='font-semibold text-2xl py-3'>{a.title}</h1>
         <div className=' flex text-sm  '>
           
                 <button className=' flex justify-center items-center gap-1 text-green-600  px-3'><FaDownload />{ a.downloads }</button>
            <button className='  flex justify-center gap-1 items-center text-orange-500  px-'><FaStar />{a.ratingAvg}</button>
             <button className='  flex justify-center gap-1 items-center text-gray-500 '>{a.size} MB</button>
  </div>
         </div>
</div>
<div className="right  "> <button className='flex px-3 mx-auto justify-center items-center bg-green-300 rounded'>Uninstall</button></div>


                                  {/* <div  className=' shadow-2xl flex mx-20  my- rounded-xl hover:scale-103 transition ease-in-out'>
         <figure className='h-30 w-1/10 rounded-t-xl overflow-hidden'>             <img className='w-3/4  object-cover' src={a.image} alt="" />
         </figure>
    <div className=''>
     <h1 className='font-semibold text-2xl py-3'>{a.title}</h1>
         <div className=' flex text-sm  '>
           
                 <button className=' flex justify-center items-center gap-1 text-green-600  px-3'><FaDownload />{ a.downloads }</button>
          
           
             <button className='  flex justify-center gap-1 items-center text-orange-500  px-'><FaStar />{a.ratingAvg}</button>
             <button className='  flex justify-center gap-1 items-center text-gray-500 '>{a.size} MB</button>
 
     
         </div>
        
           </div> 
              <div> <button>btn</button></div>
                             </div> */}
               
           </div>
        
                                  ))
                    
                }
            </div>
</div>
 )
}

export default Installation;