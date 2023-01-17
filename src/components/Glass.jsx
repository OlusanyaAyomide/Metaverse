import React from 'react'
import { GlassText } from '../constants'
import { planet9 } from '../assests/exporter'
import { motion } from 'framer-motion'
import { GlassMotion } from '../../utils/motion'

export default function Glass() {
  return (
    <section className='cont -mt-8 flex flex-col sm:flex-row sm:items-center text-white lg:w-9/12 lg:mx-auto relative z-20 pb-16'>
        <div className='w-8/12 sm:w-4/12 mx-auto p-2 h-full mb-8 sm:mb-0 '>
            <motion.div className='flex items-center py-8 sm:py-0 sm:h-[250px] md:h-[300px] relative rounded-lg glassmorphism '
            variants={GlassMotion("left")} initial="initial" whileInView={"animate"}
            >
                <div className='p-2 relative z-10'>
                    <h1 className='text-lg md:text-xl my-1 tracking-wide font-semibold'>Samantha</h1>
                    <p className='text-gray-300 text-xs md:text-sm lg:text-base tracking-tight mb-4'>Metaverus founder</p>
                    <p className='text-sm md:text-base text-gray-300'>{GlassText}</p>
                </div>
                <div className='absolute top-0 -left-2 w-8/12 glass-grad rotate-[40deg] rounded-[38%] z-0 h-[80px]'></div>
            </motion.div>
        </div>
        <motion.div className='w-full p-2 sm:w-8/12' variants={GlassMotion("right")} initial="initial" whileInView={"animate"}>
            <div className='h-[250px] md:h-[300px] w-full rounded-lg overflow-hidden sm:w/8/12'>
                <img src={planet9} alt="planet9" className='h-full w-full object-cover' />
            </div>
        </motion.div>
    </section>
  )
}
