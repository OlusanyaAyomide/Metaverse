import React from 'react'
import { insights } from '../constants'
import { motion } from 'framer-motion'
import { FadeIn,fadeUp} from '../../utils/motion'

export default function Insights() {
    const insightList = insights.map((item,key)=>{
        return(
        <motion.div key={key} className="flex my-8 items-center flex-wrap" variants={fadeUp} initial="initial" whileInView="animate">
            <div className="w-3/12 md:w-3/12 lg:w-2/12 rounded-lg overflow-hidden ">
                <div className='h-[100px] w-full rounded-xl overflow-hidden]'>
                       <img src={item.imgUrl} alt="image" className='h-full w-full object-cover rounded-lg'/>
                </div>
            </div>
            <div className='px-2 w-9/12 md:w-7/12 lg:w-8/12'>
                <h1 className='mb-2 text-gray-300 text-base leading-4 md:text-xl font-semibold'>{item.title}</h1>
                <p className='my-1 text-sm md:text-base text-gray-500'>{item.subtitle}</p>
            </div>
            <div className='w-full md:w-2/12 flex items-center justify-end -mt-4 md:justify-center'>
                <span className='fa fa-long-arrow-right p-2 border rounded-full text-white -rotate-[25deg] opacity-70'></span>
            </div>
        </motion.div>
        )
    },[])
  return (
    <section className='-mt-16 cont relative pb-16'>
        <h1 className='min-header text-center my-2'>Insights</h1>
        <motion.h1 className='big-header mb-4 text-center' variants={fadeUp} initial="initial" whileInView="animate">Insights About Metaverse</motion.h1>
        <div className='w-full md:w-10/12  lg:w-9/12 mx-auto mt-4 relative z-20'>
            {insightList}
        </div>
        <motion.div className="absolute -z-0 w-[70%] h-32 md:h-44  rounded-[40%] bottom-0 left-[15%] started-grad rotate-45" variants={FadeIn} initial="initial" whileInView="animate"></motion.div>
    </section>
  )
}
