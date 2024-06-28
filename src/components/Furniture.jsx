import React from 'react'

const Furniture = () => {
  return (
    <section className='grid justify-center items-center min-h-[100vh] pb-[30px] border-b-2 border-b-[#D9D9D9]'>
        <h1 className='text-center text-[20px] leading-[30px] font-[600]'>Share Your Setup with <br /><span className='font-[700] text-[40px] leading-[48px]'>#FurniroFurniture</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center'>

        <div className='space-y-5 '>

          <div className='flex  space-x-3  '>
            <div className=''>
                <img className='' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664003/Rectangle_36_naqe0m.png" alt="" />
            </div>
            <div className='flex justify-end items-end'>
                <img className='' src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664003/Rectangle_38_xu9hgo.png" alt="" />
            </div>
          </div>

          <div className='flex space-x-3'>
            <div >
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664003/Rectangle_37_vmgpf1.png" alt="" />
            </div>

            <div className='flex justify-start items-start'>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664003/Rectangle_39_z6dbqs.png" alt="" />
            </div>
          </div>

        </div>

        <div className='flex justify-center items-center'>
            <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664004/Rectangle_40_h17new.png" alt="" />
        </div>

        <div className='space-y-5'>

          <div className='flex space-x-3'>
            <div className='flex justify-end items-end'>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664004/Rectangle_43_uhpnmt.png" alt="" />
            </div>
            <div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664003/Rectangle_45_uswgxj.png" alt="" />
            </div>
          </div>

          <div className='flex space-x-3'>
            <div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664002/Rectangle_41_fah3hh.png" alt="" />
            </div>

            <div>
                <img src="https://res.cloudinary.com/dnxovvjcz/image/upload/v1718664002/Rectangle_44_ks6ncc.png" alt="" />
            </div>
          </div>

        </div>
        

        </div>
    </section>
  )
}

export default Furniture
