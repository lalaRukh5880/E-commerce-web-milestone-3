import React from 'react'


const Banner = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-pink-500 to grey-700 font-sans px-6 py-12 mb-7'>
      <div className='absolute inset-0 opacity-30'>
        <img src='/banner.png'
          alt='icecream ' className='w-full max-h-full object-cover' />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-between items-center text-center'>
        <h3 className='text-black sm:text-5xl font-bold mb-4 '>
          Discover Your Fav IceCream</h3>
        <p className='text-white text-lg text-center mb-6max-w-xl font-semibold'>Indulge in your favorite creamy delights at our ice cream shop, where every scoop is a treat! Enjoy
          <br /> **10% off on your first order** and savor the sweetness with **free delivery** to your doorstep!</p>

        <button type='button' className='bg-white text-black mt-4 text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 transition duration-300'>
          Shop Now
        </button>
      </div>

    </div>
  )
}

export default Banner
