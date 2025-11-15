"use client"

import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import HotelCard from './HotelCard'

function Hotel() {
  return (
    <div className='pt-10 pb-10'>
        <SectionHeading heading='Recommended Hotels' />
    <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>

 {hotelsData.map((hotel, idx) => (
    <div key={hotel.id} data-aos="fade-right" data-aos-anchor-placement = "top-center" data-aos-delay={`${idx * 100}`}>
        <HotelCard hotel={hotel} />
    </div>
 ))}


    </div>
        

    </div>
  )
}

export default Hotel