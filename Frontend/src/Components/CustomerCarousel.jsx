import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const CustomerCarousel = () => {
    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

  return (
<Carousel 
infinite={true}
autoPlay={true}
autoPlaySpeed={2500}
responsive={responsive}>
  <div className='mt-4 flex flex-col items-center'>
    <div className='w-2/3'>
    <img src={require('../Content/i1.png')} alt="" />
    </div>
    <div className='mx-auto text-center font-bold text-xl'>
      POWER SUPPLY INDUSTRY
    </div>
  </div>
  <div className='mt-4 flex flex-col items-center'>
  <div className='w-2/3'>
    <img src={require('../Content/i2.png')} alt="" />
    </div>
    <div className='mt-4 font-bold text-xl'>
      L.E.D INDUSTRY
    </div>
  </div>
  <div className='mt-4 flex flex-col items-center'>
  <div className='w-2/3'>
    <img src={require('../Content/i3.png')} alt="" />
    </div>
    <div className='mt-4 font-bold text-xl'>
      E.V INDUSTRY
    </div>
  </div>
  <div className='mt-4 flex flex-col items-center'>
  <div className='w-2/3'>
    <img src={require('../Content/i4.png')} alt="" />
    </div>
    <div className='mt-4 font-bold text-xl'>
      R.O INDUSTRY
    </div>
  </div>
  <div className='mt-4 flex flex-col items-center'>
  <div className='w-2/3'>
    <img src={require('../Content/i5.png')} alt="" />
    </div>
    <div className='mt-4 font-bold text-xl'>
      TELECOM INDUSTRY
    </div>
  </div>
</Carousel>
  )
}

export default CustomerCarousel
