import React from 'react'
import { loading } from '../../utils/motion'
import { motion } from 'framer-motion'

export default function Animate() {
    const test =" bg-clip-text bg-gradient-to-r from-[hsl(197,75%,52%)] to-[white] "
  return (
   <section className='h-[100vh] w-[100vw] flex items-center justify-center bg-[#1a232e]'>
        <div>
            <motion.h1 className='font-bold text-5xl md:text-6xl t font-sans tracking-widest text-transparent versus relative text-center' variants={loading} initial="initial" animate="animate"
            data-text = "METAVERSE "
            >METAVERSE </motion.h1>
        </div>
   </section>
  )
}
