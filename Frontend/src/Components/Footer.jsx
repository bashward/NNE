import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-[45vh] border-t-4 border-orange-400 flex flex-row'>
      <div className='h-full w-1/3 bg-[#FBECB2] flex justify-center items-center'>
      <div className='flex flex-col justify-center items-start'>
        <div className='font-bold text-3xl text-[#072541]'>
         HAVE A QUERY?
        </div>
        <div className='text-xl text-[#5272F2]'>
            Leave a message.
        </div>
        <Link to='/contactus' className='bg-[#F8BDEB] hover:shadow-lg hover:shadow-white mt-3 cursor-pointer text-white p-2 text-xl rounded-md'>
        <div>
            CONTACT US
        </div>
        </Link>
      </div>
      </div>
      <div className='h-full w-2/3 bg-[#5272F2] flex pl-10 justify-start items-center'>
        <div className='flex flex-col gap-y-4 justify-center items-start'>
           <div className='font-extrabold text-5xl text-white'>
             REACH US AT
           </div>
           <div>
           <div className='font-bold text-2xl hover:text-blue-900 cursor-pointer text-white'> 
            LINKEDIN
           </div>
           <div className='font-bold text-2xl hover:text-blue-900 cursor-pointer text-white'> 
            FACEBOOK
           </div>
           </div>
           <div className='font-bold text-2xl text-white font-serif'>
            E-MAIL: sales@nnelectronics.com
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
