import React from 'react'
import { startingFeatures } from '../constants'
import { getstart } from '../assests/exporter'
import { fadeUp,GetStartedImg,FadeIn } from '../../utils/motion'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function GetStarted() {
    const [ref,isInView] = useInView()
    const controls = useAnimation()

    useEffect(()=>{
        if (isInView){controls.start("animate")}
   
    },[isInView])
    const featureList = startingFeatures.map((item,key)=>{
        return(
            <div className='flex items-center my-4' key={key}>
                <div className='w-fit pr-2 h-full items-center justify-center'>
                    <span className='bg-gray-600/50 p-2 text-white font-semibold rounded-lg'>0{key+1}</span>
                </div>
                <div className='pl-2 w-full'>
                    <h1 className='text-gray-400 text-sm md:text-base'>{item}</h1>
                </div>
            </div>
        )
    })
  return (
    <section className='cont -my-6 relative pb-40'  ref={ref}>
        <div className='flex flex-wrap py-2 items-center relative z-50'>
            <div className='w-full md:w-6/12 h-[300px] -mt-4 md:mt-0'>
                <motion.img src={getstart} alt="sarted" className='h-full w-full object-contain' variants={GetStartedImg} initial="initial" animate={controls}/>
            </div>
            <motion.div className='w-full md:w-6/12 py-2 md:pl-4' variants={fadeUp} initial="initial" whileInView={"animate"}>
                <h1 className='text-sm md:text-base text-gray-300 z-10'>How Metaverse Works</h1>    
                <h1 className='big-header text-center md:text-left'>Get Started With just few clicks</h1>  
                <div>
                    {featureList}
                </div>    
            </motion.div>
        </div>
        <motion.div className="absolute z-0 w-[70%] h-32 md:h-44  rounded-[40%] bottom-0 left-[15%] started-grad rotate-45" variants={FadeIn} initial="initial" whileInView="animate"></motion.div>
    </section>
  )
}
