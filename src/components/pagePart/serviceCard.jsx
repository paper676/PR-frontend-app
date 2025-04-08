import React from 'react'
import serIMG from '../../assets/connectBG.png'
import { Link } from 'react-router-dom'
function serviceCard(params) {
  return (
    <div className='transform transition duration-250 hover:scale-[1.014] bg-zinc-300 rounded-md mb-5 mt-2'>
        <div className="p-2">
            <div className='h-[16rem] w-[16rem] rounded-md overflow-hidden mb-2'>
              <img className='w-full h-full object-cover' src={params.IMGurl} alt="catgo" />
            </div>
            <h3 className='text-zinc-900 font-medium'>{params.name}</h3>
            <h3 className='text-zinc-500 font-light'>{params.service}</h3>
            {/* <Link to={`/ViewDetails/${params.service}/${params.name}`}>
                <button className='bg-red-400 rounded-md p-2 mt-1 text-sm tracking-tighter'>View Availabilities</button>
            </Link> */}
            {/* <Link to={'/ViewDetails'} >
                <button className='bg-red-400 rounded-md p-2 mt-1 text-sm tracking-tighter'>View Availabilities</button>
            </Link> */}
            <Link to={`/ViewDetails/${params.service}/${params.name}`}>
              <button className='bg-red-400 rounded-md p-2 mt-1 text-sm tracking-tighter text-gray-900'>View Availabilities</button>
            </Link>
        </div>
    </div>
  )
}

export default serviceCard