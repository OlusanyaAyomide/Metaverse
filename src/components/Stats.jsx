import React from 'react'
import { bill,google,apple} from '../assets'
import { Statistics } from '../constants'
import { useInView } from 'react-intersection-observer'
import { motion,useAnimation } from 'framer-motion'
import { StatL,StatR} from './Xanimation'
import { useEffect } from 'react'


export default function Stats() {
  const control = useAnimation()
  const [refl,leftCol] = useInView()
  const [refR,rightCol] = useInView()

  useEffect(()=>{
      if (leftCol){
        control.start('animatel')
      }
      if(rightCol){
        control.start('animateR')
      }
  },[control,leftCol,rightCol])
  return (
    <section className='mt-10 text-white overflow-hidden'>
      <div className="row">
        <motion.div className="w-full lg:w-6/12 mb-5 lg:mb-2" ref={refl} variants={StatL} initial="initial" animate={control}>
          <div className='px-2 '>
            <div className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] mx-auto'><img src={bill} alt="" className='cover'/></div>
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-6/12" ref={refR} variants={StatR} initial="initial" animate={control}>
          <div className='pl-3 lg:flex lg:flex-col h-full justify-center'>
            <h1 className="min-header">{Statistics.header}</h1>
            <p className='sm-text mb:5 lg:mb-8'>{Statistics.content}</p>
            <div className='flex mt-5 '>
              <img src={apple} alt=""  className="w-[100px] h-[30px] mr-3" />
              <img src={google} alt="" className="w-[100px] h-[30px] ml-3" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
