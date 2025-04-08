import React from 'react'
// import houseIMG from '../../assets/houseBG.png';
import bgIMG from '../../assets/Flyerr123.png'
// import { useContext } from 'react';
// import { UserDataContext } from '../../context/userContext';


function FrontBGimagePart() {
  // const ans=useContext(UserDataContext);
  return (
    <div>
        <div className="h-[29rem] bg-cover bg-top rounded-xl" style={{ backgroundImage: `url(${bgIMG})` }}>
          <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards] pt-40 px-10">
            {/* {ans?.user?.username && <h2 className='text-zinc-700 text-3xl font-bold mb-2'>Hello, <span className='text-zinc-800 tracking-tighter font-light'>{ans.user.username}</span></h2>} */}
            <h1 className="text-6xl font-bold mb-2">Get your Service,</h1>
            <p className="text-zinc-600 tracking-tighter px-2">Book the nearest service provider Now </p>
            <a href="#Cattooo"><input className="mt-2 bg-orange-500 px-2 py-2 rounded-xl font-bold text-zinc-800 tracking-tighter hover:cursor-pointer" type="submit" value="Book Now"/></a>
          </div>
        </div>
    </div>
  )
}

export default FrontBGimagePart