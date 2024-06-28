import React from 'react'

const Main = () => {
  return (
    <main className='w-full bg-cover bg-center min-h-[80vh] bg-[url("https://res.cloudinary.com/dnxovvjcz/image/upload/v1718030297/scandinavian-interior-mockup-wall-decal-background_1_y9u6be.png")] relative'>
        <div className='bg-[#FFF3E3] w-[300px] h-[300px] md:w-[500px] md:h-[300px]  absolute top-[250px] right-[20px] md:top-[200px] md:right-[100px] rounded-[10px] shadow-md p-8 '>
            <p className='w-[123px] font-bold '>New Arrival</p>
            <h2 className='text-[#B88E2F] font-[700] text-[30px] leading-none mb-2'>Discover Our <br />New Collection</h2>
            <p className='mb-[20px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. </p>
             <button className='w-[100px] h-[40px] md:w-[222px] md:h-[74px] bg-[#B88E2F] text-white rounded shadow-sm uppercase text-base'>Buy Now</button>
        </div>
    </main>
  )
}

export default Main
