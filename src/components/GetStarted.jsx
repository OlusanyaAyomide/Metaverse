import React,{useState,useEffect} from 'react'
import { Getstarted } from '../constants'
import { startedfeatures } from '../constants'
import { useInView } from 'react-intersection-observer'
import { motion,useAnimation } from 'framer-motion'
import { GetStartedAn,GetStartedR } from './Xanimation'



export default function GetStarted() {
  const controls=useAnimation()
  const [ref,leftView]= useInView()
  const [ref2,RightView]= useInView()
  const startedinfo = startedfeatures.map((item,key)=>{
    return(
    <div className={`flex w-full relative rounded-xl mb-5 overflow-hidden ${key == 1?'reward-cover':''}`} key={key}>
      <div className='w-[20%] lg:w-[16%] flex'>
        <div><img src={item.icon} alt="" className='w-[25px] h-[25px] md:w-[28px] md:h-[28px] relative top-3 sm:left-2 md:left-3 lg:left-2'/></div>
      </div>
      <div className=''>
        <h1 className="pb-1">{item.title}</h1>
        <p className='sm-text'>{item.content}</p>
      </div>
    </div>
    )
  })
  useEffect(()=>{
    if (leftView){
      controls.start("animate")
    }
    if (RightView){
      controls.start("animateR")
    }
  },[controls,leftView,RightView])
  return (
    <section className='text-white mt-20 lg:w-25 overflow-hidden'>
      <div className='row'>
      <motion.div className='w-full lg:w-6/12' variants={GetStartedAn} initial="initial" animate={controls} ref={ref}>
        <div className='lg:pr-2 pb-10 lg:pb-0'>
          <h1 className="text-2xl sm:text-[28px] lg:text-3xl font-semibold mb-5 lg:mb-8">{Getstarted.header}</h1>
          <p className='text-white/40 text-[14px] mb-5 lg:mb-8'>{Getstarted.content}</p>
          <button className='outline-none text-[14px] bg-blue-gradient rounded-md py-1 px-2 text-black/80 font-semibold'>Get Started</button>
        </div>
      </motion.div>
      <motion.div className='w-full lg:w-6/12' ref={ref2} variants={GetStartedR} initial="initial" animate={controls}>
        <div className='lg:pl-2 '>
          {startedinfo}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
