import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

   const [name,SetName]=useState('')
   const [number,SetNumber]=useState('')
   const [query,SetQuery]=useState('')

   const HandleSubmit = ()=>{
    
    axios.post('https://nne-backend.vercel.app/send',{
      Name: name,
      PNumber: number,
      Query: query
    },{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res)=>{
     console.log(res.data)
     SetName('')
     SetNumber('')
     SetQuery('')
    }).catch((err)=>console.log(err))

   }


  return (
    <div className="bg-[url('./Content/bg3.jpg')] h-screen bg-cover flex flex-row">
      <div className='w-[45%] h-[85%] flex justify-center items-center'>
      <iframe title='nnemap' className='border-0 rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.0543085369109!2d76.99700591487573!3d28.434435798549742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd309eebed77%3A0x218411d428d47ce4!2sN.%20N.%20Electronics!5e0!3m2!1sen!2sin!4v1701877096897!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='w-[0.5%] h-full flex items-center'>
        <div className='w-full h-[90%] rounded-md bg-[#F5F7F8]' />
      </div>
      <div className='w-[54.5%] flex justify-center items-center'>
         <div className='w-[80%] h-[85%] rounded-md bg-[#F5F7F8] flex flex-col'>
             <div className='w-full h-[20%] text-5xl pl-10 pt-10 text-black font-extrabold'>
              CONTACT US
             </div>
             <div className='w-full h-[80%] flex flex-col'>
              <div className='w-full h-contain flex flex-col p-5'>
                <label className='text-xl font-bold pb-2' htmlFor='name'>Name</label>
                <input className='p-4 rounded-md border-2 appearance-none shadow focus:outline-none focus:shadow-outline' placeholder='Enter your name' type="text" id='name' value={name} onChange={(e)=>{SetName(e.target.value)}} required />
              </div>
              <div className='w-full h-contain flex flex-col pl-5 pr-5'>
                <label className='text-xl font-bold pb-2' htmlFor='pnumber'>Phone Number</label>
                <input className='p-4 rounded-md border-2 appearance-none shadow focus:outline-none focus:shadow-outline' placeholder='Enter your number' type="text" id='pnumber' value={number} onChange={(e)=>{SetNumber(e.target.value)}} required />
              </div>
              <div className='w-full h-contain flex flex-col p-5'>
                <label className='text-xl font-bold pb-2' htmlFor='query'>Query</label>
                <textarea className='p-4 rounded-md border-2 appearance-none shadow focus:outline-none focus:shadow-outline resize-none' placeholder='Enter your query' type="text" id='query' value={query} onChange={(e)=>{SetQuery(e.target.value)}} required />
              </div>
              <button className='bg-yellow-500 mt-2 hover:shadow-md shadow hover:shadow-yellow-400 text-white mx-auto text-center p-2 pl-4 pr-4 font-bold rounded-xl' onClick={HandleSubmit}>
               SUBMIT
              </button>
             </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
