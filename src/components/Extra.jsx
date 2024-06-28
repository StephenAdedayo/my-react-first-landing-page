import React from 'react'

const Extra = ({image, name, detail, price, pricee, discount}) => {
  return (
    <div className='w-[285px] h-[446px] max-md:mr-[50px] md:mr-[50px] lg:mr-[50px] xl:mr-0 relative'>
    <img className='w-[285px] h-[301px]' src={image} alt="" />
    <div className='bg-[#F4F5F7] space-y-2 p-2'>
    <p className='font-[600] text-[24px]'>{name}</p>
    <p className='font-[300] text-[16px]'>{detail}</p>
    <div className='flex space-x-10'>
       <p className='text-[20px] font-[600]'>{price}</p>
       <p className='line-through font-[300] text-[16px]'>{pricee}</p>
    </div>
    </div>
    <div className='absolute top-[10px] right-[10px]'>
      <img src={discount} alt="" />
    </div>
  </div>
  )
}

export default Extra
