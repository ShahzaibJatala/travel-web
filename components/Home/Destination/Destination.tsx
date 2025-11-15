
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

function Destination() {
  return (
    <div className='pt-20 pb-20'>
        <SectionHeading heading='Exploring Popular Destination' />
        {/* section content  */}
        <div className='mt-14 w-[80%] mx-auto '>
        <DestinationSlider />
        </div>

    </div>
  )
}

export default Destination