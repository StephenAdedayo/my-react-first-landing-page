import React from 'react'

const Design = () => {
  return (
    <section className='my-24 p-10 bg-[#FCF8F3] w-full md:h-[150vh] max-md:h-[200vh] lg:h-[670px] md:px-[120px] grid items-center justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10'>
            <div className='mx-auto space-y-3 max-md:text-center max-sm:text-center '>
                <h1 className='leading-none text-[40px] md:leading-[48px] text-[#3A3A3A] font-[700]'>50+ Beautiful Rooms <br />inspiration</h1>
                <p className='text-[16px] font-[500]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className='bg-[#B88E2F] text-white px-3 py-2 rounded'>Explore More</button>
            </div>
            <div className='mx-auto'>
                <img className='' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718572560/Image_m90635.png" alt="" />
            </div>
            <div className='mx-auto'>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718572626/Rectangle_25_wxafz9.png" alt=""/>
                <div className='flex space-x-3 mt-5'>
                <div className='bg-[#B88E2F] rounded-full'>
                <img className='bg-[#B88E2F] text-[#B88E2F] rounded-full border-1 border-[#B88E2F] ' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718572559/Ellipse_1_wnaixt.png" alt="" />
                </div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718572559/Ellipse_1_wnaixt.png" alt="" />
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718572559/Ellipse_1_wnaixt.png" alt="" />
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718572559/Ellipse_1_wnaixt.png" alt="" />
           </div>
            </div>
        
        </div>
    </section>
  )
}

export default Design
