import React from 'react'
import Extra from "./Extra"

const Products = () => {
  return (
    <section className='my-26 grid items-center justify-center bg-white  '>
      
            <h1 className='text-center text-[40px] font-[700]'>Our Products</h1>
          <div className='mt-10 ps-10 max-sm:grid-cols-1 grid max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10  '>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120361/Images_cir3it.png" name ="Syltherine" detail ="Stylish cafe chair" pricee = "Rp 3.500.000" price = "Rp 2.500.000" discount= "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718524585/Discount_1_zgmigb.png"/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120361/Images_1_nx5osh.png" name ="Leviosa" detail ="Stylish cafe chair" price = "Rp 2.500.000" pricee = ""/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120359/Images_2_itlnme.png" name ="Lolito" detail ="Luxury big sofa" price = "Rp 7.000.000" pricee = "Rp 14.000.000" discount= "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718524585/Discount_1_zgmigb.png"/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120362/Images_3_u9siff.png" name ="Respira" detail ="Outdoor bar table and stool" price = "Rp 500.000" pricee = "" discount = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718568990/New_jjgwod.png"/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120359/Images_4_hjvokx.png" name ="Grifo" detail ="Night Lamp" price = "Rp 1.500.000" pricee = ""/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120362/Images_3_u9siff.png" name ="Mugo" detail ="Small Mug" price = "Rp 150.000" pricee = "" discount = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718568990/New_jjgwod.png"/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120359/Images_6_x3hqpr.png" name ="Pingky" detail ="cute bed set" price = "Rp 7.000.000" pricee = "Rp 14.000.000" discount= "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718524585/Discount_1_zgmigb.png"/>
           <Extra image = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718120357/image_8_z28zrm.png" name ="Potty" detail ="Minimalist Flower Pot" price = "Rp 500.000" pricee = " " discount = "https://res.cloudinary.com/dnxovvjcz/image/upload/v1718568990/New_jjgwod.png"/>

          </div>
        <button className='leading-[24px] py-[8px] px-[20px] text-[16px] ring ring-[#B88E2F] text-[#B88E2F] text-center mx-auto'>Show More</button>
    </section>
  )
}

export default Products
