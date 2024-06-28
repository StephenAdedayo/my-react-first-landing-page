import React from 'react'

const Browse = () => {
  return (
    <main className='min-h-[700px] bg-white flex justify-center items-center  md:px-[120px] my-28'>
      <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='mb-5 font-bold text-[32px]'>Browse The Range</h1>
        <p className='mb-5 text-[20px] max-sm:w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
        <div className='w-full md:w-[33.3%]'>
            <img className='' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116885/image_106_wgis3f.png" alt="" />
            <p className='text-[20px]'>Dining</p>
        </div>
        <div className='w-full md:w-[33.3%]'>
          <img className=' ' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116886/Image-living_room_zs8dl4.png" alt="" />
          <p className='text-[20px]'>Living</p>
        </div>
        <div className='w-full md:w-[33.3%]'>
           <img className='' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718116886/Mask_Group_dpsgmm.png" alt="" />
           <p className='text-[20px]'>Bedroom</p>
        </div>
        </div>


      </div>
    </main>
  )
}

export default Browse
