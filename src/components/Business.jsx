import React from 'react'
import { motion } from 'framer-motion'
import { logo } from '../assets'

const StartAnimate={
  "initial":{
    scale:0.8,
    y:-20
    
  },
  "animate":{
      x:[-30,-80,20,0,0],
      y:[-30,-80,0,0,0],
      scale:[1.2,0.8,0.5,1.2,2.7],
      rotate:[0,0,360,0,0],
      transition:{
        duration:2.2
      }

  }
}

export default function Business() {
  return (
    <section className='h-[100vh] w-full bg-[#00040F] flex items-center justify-center'>
        <motion.div variants={StartAnimate} initial="initial" animate="animate">
          <img src={logo} alt="" className='h-[50px] w-[200px]' />
        </motion.div>
    </section>
  )
}
