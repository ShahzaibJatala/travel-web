"use client"

import { destinationData } from '@/data/data';
import Image from 'next/image';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function DestinationSlider() {
  return (
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000} keyBoardControl>
      {destinationData.map((data) => (
        <div key={data.id} className='m-3'>
          <div className='relative h-[400px] w-full'>
            
            {/* image */}
            <Image 
              src={data.image} 
              alt={data.country} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1324px) 50vw, 20vw"
              className='object-cover rounded-lg' 
              priority={data.id <= 3}
              unoptimized={false}
            />

           
            {/* overlay */}
            <div className='absolute inset-0 bg-opacity-25 rounded-lg z-10'></div>
            
          </div>
           {/* text content  */}
           <h1 className='text-lg font-semibold mt-4'>{data.country}</h1>
            <p className='text-sm text-gray-600'>{data.travelers} Travelers</p>

        </div>
      ))}
    </Carousel>
  )
}

export default DestinationSlider