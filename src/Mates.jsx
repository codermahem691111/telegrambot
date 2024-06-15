import React from 'react'

function Mates() {
  return (
    <div>
     <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-4 flex-row justify-center items-center'>
      <h1 className='text-[28px] text-white font-[700]'>Mates</h1>
      <h1 className='text-[54px]'>👨‍🚀</h1>
      </div>
      <div className='flex gap-5 flex-row justify-center items-center'>
      <div className='flex flex-col items-start justify-start'>
       <h1 className='text-[20px] text-white'>Each friend nets you 2400+Coins</h1>
       <h1 className='text-[20px] text-white'>3000+ w-coin premium ⭐</h1>
       <h1 className='text-[20px] text-white'>1% of their rewards</h1>
      </div>
       <div className='bg-[rgba(213,220,226,.25)] rounded-[15px] flex gap-3 flex-col justify-center items-center h-[200px] w-[200px]'>
        <h1 className='text-yellow-500 text-[80px] font-[1800]'>1 </h1>
        <h1 className='text-yellow-500 text-[30px] font-[1800]'>level </h1>
       </div>
      
      </div>
 <div className='mt-20 flex gap-4 flex-row'>
           <button className=' border text-white font-[700] border-white rounded-[10px] px-[40px] py-[10px] flex justify-center items-center'>Invite Friends+</button>
           <button className=' border text-white font-[700] border-white rounded-[10px] px-[40px] py-[10px] flex justify-center items-center'>Share a Link</button>
       </div>

      </div> 
     

    </div>
  )
}

export default Mates
