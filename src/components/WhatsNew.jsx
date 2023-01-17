import React from 'react'
import {motion,useAnimation} from 'framer-motion'
import { newFeatures } from '../constants'
import { fadeUp, RollIn,FadeIn } from '../../utils/motion'
import { whatsnew } from '../assests/exporter'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function WhatsNew() {

    const [ref,isInView] = useInView()
    const control = useAnimation()
    useEffect(()=>{
        if (isInView){control.start("animate")}
        if (!isInView){control.start("initial")}
    },[isInView])

    const featureList = newFeatures.map((item,key)=>{
        return(
            <div key ={key} className={`${key===0?"pr-2":"pl-2"} w-6/12`}>
                <div className='w-fit rounded-lg p-2 mb-2 bg-gray-600/50'><img src={item.imgUrl} alt="" /></div>
                <h1 className='text-white font-semibold md:text-lg mb-2'>{item.title}</h1>
                <p className='text-sm md:text-base text-gray-400'>{item.subtitle}</p>
            </div>
        )
    })
  return (
    <section className='cont -mt-24 pt-4 flex flex-wrap pb-32 relative z-30' ref={ref}>
       <motion.div className='w-full md:w-6/12 md:pt-8 '  variants={fadeUp} initial="initial" whileInView={"animate"}>
       <h1 className='min-header'>What's New?</h1>  
       <h1 className='big-header mb-3'>What's New about MetaVerse</h1>
       <div className='flex w-full'>
        {featureList}
        </div>
        </motion.div>  
        <div className='w-full md:w-6/12 h-[300px] mt-8 md:mt-0'>
            <motion.img src={whatsnew} alt="" className='h-full w-full object-contain' variants={RollIn} initial="initial" animate={control}/>
        </div>
        <motion.div className='absolute z-10 w-3/12 lg:w-2/12 h-[180px] md:h-[200px] explore-cont  bottom-0 -rotate-[20deg] -right-5 rounded-[40%]'  variants={FadeIn} initial="initial" whileInView="animate"></motion.div>
    </section>
  )
}
