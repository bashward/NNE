import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-300 from-60% to-[#F5FCCD] border-b-4 border-orange-300 w-full flex justify-center items-end h-[20vh]">
    <div className='flex ml-20 justify-around w-1/2 mb-3'>
      <Link to='/' className='font-bold text-lg h-1/2 mt-2 p-2 hover:border-b-4 hover:border-blue-600 cursor-pointer'>
      <div>
       HOME
      </div>
      </Link>
      <Link to='/aboutus' className='font-bold text-lg h-1/2 mt-2 p-2 hover:border-b-4 hover:border-blue-600 cursor-pointer'>
      <div>
        ABOUT
      </div>
      </Link>
      <Link to='/' className='md:max-w-[15rem] xs:max-w-[10rem]'>
      <div>
      <img className='pb-2' src={require("../Content/logo.png")} alt="logo" />
      </div>
      </Link>
      <div className='font-bold text-lg h-1/2 mt-2 p-2 hover:border-b-4 hover:border-blue-600 cursor-pointer'>
        PRODUCTS
      </div>
      <Link to='/contactus' className='font-bold text-lg h-1/2 mt-2 p-2 hover:border-b-4 hover:border-blue-600 cursor-pointer'>
      <div>
        CONTACT US
      </div>
      </Link>
    </div>
    </div>
   
  )
}

export default Navbar
