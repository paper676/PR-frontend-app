import React from 'react'
import FAQ from './FAQItem'

function FrequentlyAsked() {
  return (
    <div>
        <div>
          <div className='mt-10'>
            <h1 className='text-zinc-800 tracking-tighter font-medium text-2xl mb-5'>Frequently Asked Questions:</h1>
            <hr className='mb-5'/>
            <div className='h-auto mb-10'>
              <FAQ />
            </div>
          </div>
        </div>
    </div>
  )
}

export default FrequentlyAsked