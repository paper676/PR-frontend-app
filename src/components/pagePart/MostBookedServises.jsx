import React from 'react'
import ServiceCard from './serviceCard'

import MBSCard1IMG from '../../assets/KichenCleaning.png';
import MBSCard2IMG from '../../assets/PaintingBG.png';
import MBSCard3IMG from '../../assets/OIP.jpg';
import MBSCard4IMG from '../../assets/1732689270836-5adbbe.png';

function MostBookedServises() {
  return (
    <div>
        <div className='mb-5'>
          <div className='mt-10'>
            <h1 className='text-zinc-800 tracking-tighter font-medium text-2xl mb-5'>Most booked services</h1>
            <hr className='mb-5'/>
          </div>
          <div className="providers flex gap-3 flex-wrap">
            <ServiceCard IMGurl={MBSCard1IMG} name="Kichen Cleaning" service="Household"/>
            <ServiceCard IMGurl={MBSCard2IMG} name="Painting" service="Household"/>
            <ServiceCard IMGurl={MBSCard3IMG} name="AC repair" service="Electric"/>
            <ServiceCard IMGurl={MBSCard4IMG} name="gresere installation" service="Electric"/>
          </div>
        </div>
    </div>
  )
}

export default MostBookedServises