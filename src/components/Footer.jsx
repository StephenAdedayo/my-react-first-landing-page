import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-24 grid items-center justify-center md:px-[50px] ps-[50px] lg:px-[120px]   '>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
         
         <div>
          <h1 className='mb-[50px] font-[700] text-[24px] leading-[36px] -mt-[7px]'>Furniro</h1>

          <address>
            <p className='font-[400] text-[16px] leading-[24px]'>400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA</p>
          </address>
         </div>

         <div>
          <h1 className='mb-[50px] font-[500] text-[16px] leading-[24px]'>Links</h1>

          <ul className='space-y-5'>
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
         </div>

         <div className=''>
          <h1 className='mb-[50px] leading-[24px] text-[16px] font-[500]'>Help</h1>

          <p className='mb-[15px]'>Payment Options</p>
          <p className='mb-[15px]'>Returns</p>
          <p className='mb-[1px]'>Privacy Policies</p>
         </div>

         <div className=''>
          <h1 className='mb-[50px] leading-[24px] text-[16px] font-[500]'>NewLetters</h1>

          <div className='flex flex-col max-md:mr-[70px]  max-sm:mr-[70px]  lg:flex-row items-center justify-center space-x-3  '>
          <input className='grow border-b-1 outline-none border-b-2 border-b-gray-900 ' type="text" placeholder='Enter Your Email Address' /> 
          <p className='border-b-2 border-b-gray-900 ' >Subscribe</p>
          </div>
          

         </div>

        </div>
 
 <div className='border-b-2 border-b-[#D9D9D9] mt-[50px] h-0 max-sm:mr-10'></div>
    <h5 className=' py-8'>2024 Furniro. All rights reserved</h5>
        
    </footer>
  )
}

export default Footer
