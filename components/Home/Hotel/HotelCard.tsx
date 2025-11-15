"use client"

import Image from 'next/image'
import { FaHeart } from 'react-icons/fa';


type props = {
    hotel: {
        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    }
}

function HotelCard({hotel} : props) {
  return (
    <div>
 <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
     <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center text-black justify-center flex-col'>
     <FaHeart className='w-3 h-3'/>
     </div>

    <Image src={hotel.image} alt={hotel.name} fill className='object-cover' />
 </div>
 <div className="mt-4">
  {/* Hotel Name */}
  <h3 className="text-xl font-semibold text-black">{hotel.name}</h3>

  {/* Location */}
  <p className="text-md mt-1 text-gray-500">{hotel.location}</p>

  {/* Rating & Reviews Block */}
  {/* This is now a flex container.
    - It groups the rating, descriptor ("Exceptional"), and review count.
    - `gap-2` adds space between the items.
    - `items-center` vertically aligns them.
  */}
  <div className="flex items-center gap-2 mt-3">
    {/* 1. Rating Badge */}
    <span className="bg-blue-600 text-white text-sm font-bold px-2 py-0.5 rounded">
      {/* You could add a star icon here too */}
      {hotel.rating}
    </span>
    
    {/* 2. Rating Descriptor */}
    {/* This was the first fix: <p> to <span> */}
    <span className="text-sm font-semibold text-gray-900">Exceptional</span>
    
    {/* 3. Review Count */}
    <span className="text-sm text-gray-500">({hotel.reviews} reviews)</span>
  </div>

  {/* Price Block */}
  {/* This was the second fix.
    - It's now a single <p> tag.
    - The price is inside a <span> to give it different styling (blue, bold).
  */}
  <p className="text-md mt-4 text-gray-600">
    Starting from{' '}
    <span className="text-blue-500 font-bold text-lg">
      US${hotel.price}
    </span>
  </p>
</div>
    </div>
  )
}

export default HotelCard