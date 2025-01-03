import React from 'react'

export default function Progressor() {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>


        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-white p-1.5 flex items-center rounded-full '>
              <span className='text-base text-black font-bold '> 1 </span>
            </div>
            <div className='w-full h-1  mx-4 rounded-lg bg-pink-950'></div>
          </div>
          <div className='mt-2 mr-4 '>
            <h6 className='text-base font-bold text-black'>Step 1: Choose Your Flavour </h6>
            <p className='text-xs text-gray-700'>Explore our flavorful menu & select your Ice-cream </p>
          </div>
       </div>

       <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-white p-1.5 flex items-center rounded-full '>
              <span className='text-base text-black font-bold '> 2 </span>
            </div>
            <div className='w-full h-1  mx-4 rounded-lg bg-pink-950'></div>
          </div>
          <div className='mt-2 mr-4 '>
            <h6 className='text-base font-bold text-black'>Step 2: Customise your order</h6>
            <p className='text-xs text-gray-700'>Tailor your flavour to your taste </p>
          </div>
       </div>


       <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-white p-1.5 flex items-center rounded-full '>
              <span className='text-base text-black font-bold '> 3 </span>
            </div>
            <div className='w-full h-1  mx-4 rounded-lg bg-pink-950'></div>
          </div>
          <div className='mt-2 mr-4 '>
            <h6 className='text-base font-bold text-black'>Step 3: place Your order </h6>
            <p className='text-xs text-gray-700'>Ready to Enjoy our flavorful ice-cream </p>
          </div>
       </div>



      </div>

    </div>
  )
}
