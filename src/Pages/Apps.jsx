import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import Appscard from '../Components/appscard';

const Apps = () => {
    const [search, setsearch ] = useState('')
      const { apps ,loading , Error } = useApps() 
      const term = search.trim().toLocaleLowerCase() 
      const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term) ) : apps
    return (
     
        <>
         
        <div>
            <div className=' text-center py-15'>
                  <h1 className='font-bold text-3xl'>Our All Aplications</h1>
                  <p className='text-gray-500 text-sm'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
          
         <div className=' flex justify-between mx-auto px-2 md:px-8'>
            <p className='font-semibold text-lg'><span className='text-lg'>({searchedApps.length})</span>  Apps Found</p>
             <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  
  <input value={search} onChange={(e)=> setsearch(e.target.value)} type="search" required placeholder="Search Apps" />
</label>
         </div>   
</div>
<div className='grid my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mx-auto px-4 md:px-8 lg:px-12 '>
    {
 searchedApps.map(app =>(
<Appscard key={app.id} app={app} />
 )
)
}
</div>

        </>
    );
};

export default Apps;