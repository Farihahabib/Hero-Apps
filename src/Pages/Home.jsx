import React from 'react';
import Banner from '../Components/Banner';
import { NavLink } from 'react-router';
import Appscard from '../Components/appscard';
import useApps from '../hooks/useApps';

const Home = () => {
// const  apps= useLoaderData();
const{ apps ,loading , Error} = useApps()
const featuredapps = apps.slice(0,8)
    return (
<>
 <Banner />
 <div className='grid my-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto px-4 md:px-8 lg:px-12 '>
    {
       featuredapps.map(app =>(
<Appscard key={app.id} app={app} />
 
        ))  
    }
 </div>

    <NavLink to='/Apps' className='text-white  inline-block  text-center btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  justify-center my-9 mx-auto   rounded-xl text-sm'>Show All</NavLink>
 
 
</>
  
         
    
    );

};

export default Home;