import React from 'react';
import bgIMG from '../../assets/LOGO123.png';
import { Link } from 'react-router-dom';
function footer() {
  return (
    <footer className='text-gray-300 bg-gray-700 bg-opacity-95 tracking-normal px-2'>
      <div className=' h-[11rem] flex flex-row gap-10 p-5 justify-between'>
        <div className='left-footer w-[30rem] mt-5'>
          <Link to='/'><img className='h-12 w-23' src={bgIMG} alt="logo" /></Link>
          <p className='text-sm font-light tracking-normal ml-2 '>We connect users with local service providers for home repairs, cleaning, and more</p>
          <div className="social_icons flex flex-row items-center gap-2 m-3">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-discord"></i>
          </div>
        </div>
        <div className='flex flex-row gap-10 mr-5 mt-5 w-[20rem]'>
          <div className='center-footer'>
            <h4 className='text-sm font-bold tracking-normal'>COMPANY</h4>
            <ul className='text-sm font-light ml-1'>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
          <div id='Reach-us' className='right-footer'>
            <h4 className='text-sm font-bold tracking-normal'>REACH US</h4>
            <div className='text-sm font-light'>
              <p><i className="fa-solid fa-phone mr-1"></i> +123-456-789</p>
              <p><i className="fa-regular fa-envelope-open mr-1"></i> WorkConnect@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='mx-2'/>
      <div className='flex justify-center items-center h-10 tracking-normal px-2'>
        <p className='text-[13px] font-light'>&copy;2025 WorkConnect, All rights reserved</p>
      </div>
    </footer>
  )
}

export default footer

{/* <footer className='text-gray-300 bg-gray-700 bg-opacity-95 flex justify-center items-center h-20 tracking-tighter px-2'>
  <p>&copy;2025 WorkConnect</p>
</footer> */}