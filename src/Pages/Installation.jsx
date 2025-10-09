import React, { useEffect, useState } from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa"
import useApps from '../hooks/useApps';
import { ToastContainer,toast } from 'react-toastify';
const Installation = () => {
    const [InstallList ,setInstallList] = useState([]);
       const [sortorder ,setsortorder] = useState('none')
           const {  loading , Error } = useApps();
    useEffect(() =>{
        const savedlist = JSON.parse(localStorage.getItem('Installation'))
        if (savedlist) setInstallList(savedlist)
    },[])
   if(loading) return <p className='font-bold text-2xl text-center'>Loading...</p>
const sortedItem = (() =>{
    if(sortorder === 'asc'){
        return [...InstallList].sort((a,b) =>a.size - b.size)
    }else if (sortorder ==='dsc'){
          return [...InstallList].sort((a,b) =>b.size - a.size)
    }else {
      return InstallList
    } 
}
)()

const handleUninstall = id =>{
    toast('uninstalled')
     const existinglist = JSON.parse(localStorage.getItem('Installation'))

    let updateList = existinglist.filter(a=> a.id !== id )
  
//for ui instant update
setInstallList(prev => prev.filter(a=> a.id !== id))
    localStorage.setItem('Installation', JSON.stringify(updateList))
}

    return (
        <>
        <ToastContainer />
        <div>
            <div className='flex mx-6 justify-between my-6'>
            <h1>Installed Apps: {sortedItem.length}</h1>
     <select className='text-sm text-gray-500 shadow-2xl border p-1.5' value={sortorder} onChange={e =>setsortorder(e.target.value)}>
     <option value='none'>Sort by Size</option>
     <option value='dsc'>Hig-Low</option>
     <option value='asc'>Low-High</option>
     </select>
            </div>
            <div className='space-y-3'>
                {
                   sortedItem.map(a=>(
                          <div className='my-5 flex p-2 shadow-2xl rounded-2xl justify-between hover:scale-102 transition ease-in-out mx-20'>
                       
<div className="left flex">

     <figure className='h-30 w-1/10 rounded-t-xl overflow-hidden'>             <img className='w-3/4  object-cover' src={a.image} alt="" />
         </figure>
         <div>
             <h1 className='font-semibold text-2xl py-3'>{a.title}</h1>
         <div className=' flex text-sm  '>
           
                 <button className=' flex justify-center items-center gap-1 text-green-600  px-3'><FaDownload />{ a.downloads }</button>
            <button className='  flex justify-center gap-1 items-center text-orange-500  px-3'><FaStar />{a.ratingAvg}</button>
             <button className='  flex justify-center gap-1 items-center text-gray-500 '>{a.size} MB</button>
  </div>
         </div>
</div>
<div className="right  "> <button onClick={()=>handleUninstall(a.id)} className='flex px-3 mx-auto justify-center items-center bg-green-300 rounded'>Uninstall</button></div>
</div>
        
     ))}
            </div>
</div>
</>
 )
}

export default Installation;