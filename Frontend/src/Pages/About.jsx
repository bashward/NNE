import React from 'react'
import Timeline from '../Components/Timeline'

const About = () => {

  const about="N.N. Electronics has been a trusted supplier of quality ferrite components since 1997. We take pride in our continuous efforts to evolve and advance in the electronics industry, expanding our customer base and increasing our economic scale both horizontally and vertically. As a leading supplier, we understand the importance of meeting the highest standards of quality and reliability in our products. To achieve this, we have established stringent quality control measures that are consistently enforced at every stage of production."

  return (
    <>
    {/* about */}
    <div className="w-full bg-[url('./Content/bg4.jpg')] flex bg-cover h-screen">
    <div className='absolute w-full h-full backdrop-blur-sm'></div>
    <div className='flex flex-col justify-center items-center h-full z-10 w-[40%]'>
      <div className='text-7xl font-extrabold text-[#F4CE14]'>
      ABOUT US
      </div>
      <div className='mt-5 rounded-sm w-1/2 bg-orange-600 h-3' />
    </div>
    <div className='w-[0.5%] z-10 h-full flex items-center'>
        <div className='w-full h-[90%] rounded-md bg-[#F5F7F8]' />
      </div>
      <div className='w-[59.5%] h-full flex justify-center items-center'>
       <div className='h-[80%] w-[80%] rounded-md backdrop-blur-lg'>
        <div className='h-full w-full p-8 flex items-center text-white font-bold text-2xl text-justify'>
        {about}
        </div>
       </div>
      </div>
    </div>

    {/* timeline */}
    <div className='w-full bg-yellow-300 flex flex-col border-t-4 border-orange-400'>
    <div className='flex flex-col mt-4 items-center w-full'>
     <div className='text-7xl font-extrabold text-white'>
      OUR JOURNEY
     </div>
      <div className='mt-4 h-3 w-1/4 bg-white rounded-sm'/>
    </div>
    <Timeline/>
    </div>

    </>
  )
}

export default About
  