import React from 'react'
import {discount} from '../assets/index.js'
import { TeamInfo } from '../constants/index.js'
import {motion} from 'framer-motion'
import { TeamInfoAn,Herouser } from './Xanimation.jsx'
import {robot} from '../assets/index.js'


export default function Hero() {
  const userList = TeamInfo.users.map((item,key)=>{
      return(
        <div className='w-full md:w-4/12 py-1 mx-auto  border-r-white/60 border-r-2 px-1' key={key} >
        <h1 className="font-semibold text-md">{item.number}<span className="text-gradient ml-1">{item.span}</span></h1>
      </div>
      )
  })

  return (
    <section className='row text-white '>
      <div className="w-full lg:w-7/12">
        <div className="spacing h-full flex items-center">
         <div>
          <div className='flex mt-2  items-center bg-discount-gradient rounded-lg pr-[2px]'>
             <img src={discount} alt="" className='w-8 h-8' />
             <h3 className='text-[12px] text-white/50'>20% DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</h3>
           </div>
           <div className='mt-5 flex'>
            <div className='w-full lg:w-8/12'>
              <h1 className='text-[30px] md:text-[40px] lg:text-[45px] leading-10 lg:leading-[60px] font-bold'>The Next <span className='text-gradient'>Generation</span> payment Method.</h1>
              <motion.p className='mt-7 lg:leading-8 text-[14px] text-white/30' variants={TeamInfoAn} initial="initial" animate="animate">{TeamInfo.content}</motion.p>
            </div>
              <div className='hidden lg:block lg:w-4/12'>
                <div className='h-24 w-24 rounded-full p-1 text-white bg-blue-gradient'>
                  <div className='text-center text-[12px] bg-[#00040F] h-full w-full rounded-full flex flex-col items-center justify-center'><span>Get <i className='fa fa-arrow-right mx-1 -rotate-45'></i></span>Started</div>
                </div>
              </div>
           </div>
         </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12 mt-10  lg:pb-0 lg:pl-5 relative">
        <div className='w-full'><img src={robot} alt="robot" className=' mx-auto w-[50%] h-[50%] md:w-[60%] md:h-[60%] lg:w-[100%] lg:h-[100%]'/></div>
      </div> 
      <motion.div className='row mt-10 w-full' variants={Herouser} initial="initial" animate="animate">
        {userList}
      </motion.div>
    </section>
  )
}
