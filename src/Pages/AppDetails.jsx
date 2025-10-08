import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import downloadsimg from "../assets/icon-downloads.png"
import ratingsimg from "../assets/icon-ratings.png"
import reviewsimg from "../assets/icon-review.png"
const AppDetails = () => {
    const [btntext ,setbtntext ] = useState('Install')
    const { id } = useParams();
    const { apps, loading , Error } = useApps();
    const app = apps.find(a => String(a.id) === id);
    if(loading) return <p>Loading...</p>
    const { title , image , downloads , ratingAvg ,reviews , size } = app  ||{}
    const handleInstallbtn = () => {
        const existinglist = JSON.parse(localStorage.getItem('Installation'))
        let updateList = []
        
        if( existinglist ) {

const isDuplicate = existinglist.some(a=> a.id ===app.id)

if (isDuplicate) 
      updateList = [...existinglist, app]
        } else {
            updateList.push(app)
            setbtntext('Installed')
        }
        localStorage.setItem('Installation',JSON.stringify(updateList))
    }
    return (
        <>
         <div className=' flex gap-8 flex-col md:flex-row lg:flex-row items-center'>
         <img className='w-60' src={image} alt="" />
         <div>
            <h1 className='font-bold'>{title}</h1>
            <p className='pb-5 text-gray-400'>Developed by <span className='text-purple-400 font-semibold'>Productive.io</span></p>
            <div className='flex gap-7 border-t-1 border-gray-400 pt-5'>
                <div className=''>
                    <img className='w-1/3' src={downloadsimg} alt="" />
                    <p className='text-sm text-gray-500'>Downloads</p>
                    <h1 className='font-bold'>{downloads}</h1>
                </div>
                <div>
                    <img  className='w-1/4' src={ratingsimg} alt="" />
                    <p className='text-sm text-gray-500'>Average ratings</p>
                    <h1 className='font-bold'>{ratingAvg}</h1>
                </div>
                <div>
                    <img className='w-1/3' src={reviewsimg} alt="" />
                 
                    <p className='text-sm text-gray-500'>Total Reviews</p>
                    <h1 className='font-bold'>{[reviews]}</h1>
                </div>
                
            </div>
<button onClick={handleInstallbtn } className=' bg-green-400  font-semibold my-3 rounded-2xl px-3 py-1 text-white  '>{btntext}</button>
         </div>

        </div>

        </>
       
    );
};

export default AppDetails;