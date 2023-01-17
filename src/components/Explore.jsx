import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp,fadeIn,FadeIn } from '../../utils/motion'
import TopSection from './TopSection'
import { useState } from 'react'
import { exploreWorlds } from '../constants'


export default function Explore() {
    const [num,setnum] = useState(1)

    const CardList = exploreWorlds.map((item,key)=>{
        return(
            <motion.div className={`px-1 z-20 ${key===num?"w-4/12":"w-2/12 relative"}  overflow-hidden cursor-pointer rounded-2xl`} variants={fadeIn("right","spring",(key+1)*0.5,0.5)} initial="hidden" whileInView="show" key={key} onClick={()=>{setnum(key)}}>
                <div className={`${key === num?"h-[300px]":"h-[290px]"} relative`}>
                    <img src={item.imgUrl} alt="cover" className='object-cover h-full w-full rounded-xl'/>
                    <h1 className={`z-30 flex flex-nowrap absolute bottom-4 ${key===num?"text-lg text-center w-full md:text-xl lg:text-2xl lg:px-4":"hidden"} font-semibold text-white tracking-wide`}>{item.title}</h1>
                </div>
               
             </motion.div>
        )
 
    })

    return (
      <motion.section className='cont -mt-8 pb-28 relative' variants={fadeUp} initial="initial" whileInView="animate">
      <TopSection/>
      <div className='flex items-center mt-10'>
            {CardList}
      </div>
      <motion.div className='absolute z-10 w-4/12 lg:w-3/12 h-[180px] md:h-[200px] explore-cont  bottom-0 -rotate-[20deg] -left-5 rounded-[40%]'  variants={FadeIn} initial="initial" whileInView="animate"></motion.div>
      </motion.section>
    )
}
