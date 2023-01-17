import React from 'react'

export default function Footer() {

  const Enter = ()=>{
    return(
      <span className='bg-blue-500/50 py-2 px-4 text-sm md:text-base rounded-lg'>EnterMetaVerse</span>
    )
  }
  return (
    <section className='text-white mt-2 mb-4p py-2 cont pb-2 relative'>
      <div className='flex flex-col items-center sm:flex-row pb-4 border-b border-gray-400'>
        <div className='w-full sm:hidden mb-2'>
            <Enter/>
        </div>
        <h1 className='big-header w-full sm:w-10/12'>Enter The Metaverse</h1>
        <div className='hidden  sm:w-2/12 sm:flex justify-end'>
          <Enter/>
        </div>
      </div>
      <div className='flex justify-between relative z-20 items-center mt-2'>
          <h1 className='text-white font-semibold'>METAVERSUS</h1>
          <span className='text-12px md:text-[14px] text-gray-500'>Copyright &#169;</span>
          <div className='text-white text-sm md:text-base flex items-center justify-around w-3/12'>
            <span className='fa fa-twitter'></span>
            <span className="fa fa-linkedin"></span>
            <span className="fa fa-instagram"></span>
            <span className='fa fa-facebook'></span>
          </div>  
      </div>
      <div className='absolute z-0 w-10/12 left-[8.4%] -bottom-10 rounded-[40%] h-[90px] footer-gradient rounded-t-[10%]'>eee</div>

    </section>
  )
}
