import React from 'react'
import { Carddeals } from '../constants'
import { card,quotes} from '../assets'
import { motion,useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {CardL,CardR} from './Xanimation'


export default function Carddeal() {
const control = useAnimation()
const [refl,leftCol] = useInView()
const [refR,rightCol] = useInView()
useEffect(()=>{
    if (leftCol){
      control.start('animatecardL')
    }
    if(rightCol){
      control.start('animatecardR')
    }
},[control,leftCol,rightCol])
  return (
    <section className='mt-10 text-white overflow-hidden'>
      <div className="row">
      <motion.div className="w-full lg:w-6/12 mb-10" ref={refl} variants={CardL} initial="initial" animate={control}>
          <div className='pl-3 lg:flex lg:flex-col h-full justify-center'>
            <div>
              <h1 className="min-header">{Carddeals.header}</h1>
              <p className='sm-text mb:5 lg:mb-8'>{Carddeals.content}</p>
              <button className='outline-none text-[14px] bg-blue-gradient rounded-md inline-block mt-5 py-1 px-2 text-black/80 font-semibold'>Get Started</button>
          </div>
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-6/12 mb-5 lg:mb-2" ref={refR} variants={CardR} initial="initial" animate={control}>
          <div className='px-2 '>
            <div className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] mx-auto'><img src={card} alt="" className='cover'/></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
