import React from 'react'

function serviceCat(params) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div key={params.key} className='h-20 w-20 rounded-[1.3rem] overflow-hidden border-2'>
          <img className='p-[2px] rounded-[1.3rem] w-full h-full object-cover' src={params.IMGurl} alt="catg" />
        </div>
        <p className='px-4 text-zinc-900 tracking-tighter'>{params.catgory}</p>
    </div>
  )
}
export default serviceCat