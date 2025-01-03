import React from 'react'

import { CiSearch } from "react-icons/ci";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { IoIceCream } from "react-icons/io5";


const Navbar = () => {
    return (
        <div>
            <div className='grid xl:grid-cols-1 grid-cols-1'>
                <div className='p-5'>
                    <div className='py-3 px-3 rounded-xl border w-full'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center items-center gap-2'>
                                {/*logo icecream*/}
                                
                                <IoIceCream  className='w-6 h-6 text-black hover:text-white'/>
                                {/*search icon*/}
                                <div style={{ position: 'relative' }}>
                                    <input className='rounded-3xl py-3 px-5 outline-none text-xs w-{350px} pr-10 hidden lg:block md:block'
                                        placeholder='Search your favourite flavour' />
                                    <CiSearch className='w-5 h-5 text-pink-800 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block' />

                                </div>

                            </div>

                            <div className='flex justify-center items-center gap-2'>
                                <FaBolt className=' w-5 h-5 text-pink-500 hidden lg:block md:block ' />
                                <p className='text-sm text-black hidden lg:block md:block '>Order now and get it within
                                    <span className='text-pink-600'> 15 minutes</span>
                                </p>

                                {/*cart icon*/}
                                <FaCartShopping className=' w-8 h-8 rounded-full  relative text-pink-600 p-1 hover:text-black' />
                                
                                    <RxAvatar className='inline-block w-8 h-8 rounded-full ring-2 ring-pink-600 hover:text-black' />
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Navbar
