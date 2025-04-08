import React from 'react'
// import Servicecat from './serviceCatg';
import { services_list } from './asserts';
import ServiceCatPage from './serviceCatPage';

const CatageorySEl = ({ Category, setCategory }) => {
  return (
    <div id='Cattooo'>
      <div className='mt-20'>
        <h1 className='text-zinc-800 tracking-tighter font-medium text-2xl mb-5'>Our Services</h1>
      </div>
      <div className="h-[10rem]">
        <p className='text-sm  mb-2'>Select one Category</p>
        <div className='flex gap-10 w-full overflow-x-scroll scrollbar-hidden'>
          {services_list.map((item, index) => {
            return (
              <div key={item.service_name || index} onClick={() => setCategory(prev => prev === item.service_name ? "All" : item.service_name)} className='flex flex-col justify-center items-center'>
                <div className={Category === item.service_name ? "h-20 w-20 rounded-[1.3rem] overflow-hidden border-2 border-red-300" : "h-20 w-20 rounded-[1.3rem] overflow-hidden"}>
                  <img className='p-[2px] rounded-[1.3rem] w-full h-full object-cover' src={item.service_image} alt="catg" />
                </div>
                <p className='px-4 text-zinc-900 tracking-tighter'>{item.service_name}</p>
              </div>
            )
          })}
        </div>
        <hr className="border-zinc-300 my-5" />
      </div>
      <div className='opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]'>
        <ServiceCatPage Category={Category}/>
      </div>
    </div>
  )
}
export default CatageorySEl