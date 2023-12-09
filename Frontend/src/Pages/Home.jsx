import React from 'react'
import FloatS from '../Components/FloatS'
import FloatT from '../Components/FloatT'
import CustomerCarousel from '../Components/CustomerCarousel'


const Home = () => {
  return (
    <>

    {/* first component */}
    <div className="bg-[url('./Content/bg.jpg')] h-[80vh] bg-cover flex flex-col justify-between">
    <div className='h-[90%] w-full flex flex-row'>
      <div className='flex flex-col justify-center items-center w-1/2'>
       <div className='font-extrabold text-5xl text-black'>
         N.N ELECTRONICS
       </div>
       <div className='font-bold text-3xl text-[#0D1282]'>
        Work | Commitment | Ethics
       </div>
      </div>
      <div className='flex justify-center items-center w-1/2'>
       <FloatS/>
       <FloatT/>
      </div>
    </div>
    <div className='h-[10%] w-full flex justify-center items-end font-bold text-black text-3xl font-serif'>
     Taking care of your everyday magnetics need.
    </div>
    </div>



   {/* second component  */}
    <div className="bg-[url('./Content/bg1.jpg')] border-t-4 border-orange-300 bg-cover h-[80vh] flex flex-col justify-around items-center">
    <div className='text-6xl font-extrabold text-[#314961]'>
    WHY US?
    <div className='h-[1vh] mt-4 bg-[#0C356A] rounded-sm'></div>
    </div>
    
    <div className='w-1/2 h-1/2 bg-[#F5F7F8] shadow-lg rounded-md'>
    <div className='flex flex-row p-8 h-full w-full'>
      <div className='w-1/3 flex flex-col'>
       <div className='h-[60%] flex flex-shrink justify-center'>
         <img className='rounded-md' src={require('../Content/iso.png')} alt="iso pic" />
       </div>
       <div className='h-[40%] text-xl flex justify-center font-bold items-start pt-6'>
         ISO APPROVED
       </div>
      </div>
      <div className='w-1/3 flex flex-col'>
      <div className='h-[60%] flex flex-shrink justify-center'>
         <img className='rounded-md' src={require('../Content/satisfaction.png')} alt="iso pic" />
       </div>
       <div className='h-[40%] text-xl mx-auto text-center font-bold pt-4'>
         100+ HAPPY CUSTOMERS
       </div>
      </div>
      <div className='w-1/3 flex flex-col'>
      <div className='h-[60%] flex flex-shrink justify-center'>
         <img className='rounded-md' src={require('../Content/efficiency.png')} alt="iso pic" />
       </div>
       <div className='h-[40%] text-xl flex justify-center pt-6 font-bold items-start'>
         HIGH CAPACITY
       </div>
      </div>
    </div>
    </div>

    </div>


    {/* third component */}
    <div className="bg-[url('./Content/bg2.jpg')] bg-cover h-[80vh] border-t-4 border-orange-300 flex flex-col justify-around items-center">
      <div className='text-6xl font-extrabold text-[#314961]'>
       INDUSTRIES WE SERVE
       <div className='h-[1vh] mt-4 bg-[#0C356A] rounded-sm'></div>
      </div>
     
      <div className='w-1/2 h-1/2 bg-[#F5F7F8] shadow-lg rounded-md'>
      <div className='h-full p-6'>
      <CustomerCarousel/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home