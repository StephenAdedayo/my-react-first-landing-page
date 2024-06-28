import React from 'react'
import logo from "../assets/Meubel House_Logos-05.png"
import { FaRegUser, FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import name from "../assets/SkinClinic.png"

const Navbar = () => {
  return (
    <nav className='flex justify-between  items-center bg-white h-[100px] w-full px-[60px] shadow'>
        <div className='flex max-sm:mr-[90px] '>
            <img src={logo} alt="" className='logo mr-3 ' />
            <img src={name} alt="" />
        </div>
 
        <div className='hidden lg:block space-x-2 lg:space-x-14 '>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        <div className='lg:hidden flex justify-center items-center  absolute top-[100px]  space-x-10 left-0 right-0 z-10 bg-white w-full p-[30px]  '>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        


        <div className='flex justify-between w-[250px] '>
        <FaRegUser className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
        <FaSearch className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
        <FaRegHeart className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer' />
        <FaShoppingCart className='p-2 hover:rounded-full hover:bg-red-200 text-4xl cursor-pointer'/>

        </div>
    </nav>
  )
}

export default Navbar
