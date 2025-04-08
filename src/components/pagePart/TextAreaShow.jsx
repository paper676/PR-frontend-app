import React from 'react'

function TextAreaShow() {
  return (
    <div>
        <div className='h-[10rem] mt-5 mb-5'>
            <div className='textArea flex gap-10 h-[10rem] w-full items-center mx-10'>
              <p className='text-3xl font-extrabold transform transition duration-500 hover:scale-[1.05] hover:text-zinc-500 hover:cursor-pointer'><span className='font-medium'>25+ </span>Categories</p>
              <p>|</p>
              <p className='text-3xl font-extrabold transform transition duration-500 hover:scale-[1.05] hover:text-zinc-500 hover:cursor-pointer'>Easy Access</p>
              <p>|</p>
              <p className='text-3xl font-extrabold transform transition duration-500 hover:scale-[1.05] hover:text-zinc-500 hover:cursor-pointer'>Reasonable Prices</p>
              <p>|</p>
              <p className='text-3xl font-extrabold transform transition duration-500 hover:scale-[1.05] hover:text-zinc-500 hover:cursor-pointer'>Services at your doorstep</p>
            </div>
        </div>
    </div>
  )
}

export default TextAreaShow