import React from 'react'
import { TestimoniesL } from '../constants'
import { quotes } from '../assets'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TestAn } from './Xanimation'
import { useEffect } from 'react'

export default function Testimonies() {
  const TestList = TestimoniesL.testimony.map((item,key)=>{
    const control = useAnimation()
    const [ref1,Test1] = useInView() 
    const [ref2,Test2] = useInView()
    const [ref3,Test3] = useInView()

    function Checkref(props){
        if(props==0){return ref1}
        if(props == 1){return ref2}
        if(props == 2){return ref3}
    }
    useEffect(()=>{
        if(Test1){control.start("animate1")}
        if(Test2){control.start("animate2")}
        if(Test3){control.start("animate3")}
    },[control,Test1,Test2,Test3])

    return(
      <motion.div className={`w-full lg:w-4/12 mb-8 lg:mb-0 rounded-xl relative overflow-hidden   ${key==0?'reward-cover':''}`} key={key} ref={Checkref(key)} variants={TestAn} initial ="initial" animate={control}>
        <div className='p-5'><img src={quotes} alt="quotes" className='w-[35px] h-[35px]'/></div>
        <div className='px-5 mb-5'><p className='sm-text'>{item.content}</p></div>
        <div className='flex px-5'>
          <div className='h-[38px] w-[38px] rounded-full overflow-hidden'>
            <img src={item.logo} alt=""/>
          </div>
          <div className='pl-2'>
            <h1 className='text-xl text-white/70'>{item.name}</h1>
            <p className='text-white/40 text-[10px]'>{item.role}</p>
          </div>
        </div>
      </motion.div>
      
    )
  })
  
  return (
    <section className='text-white'>
      <div className='row mb-20' >
        <div className='row-item pl-2 lg:mb-5'>
          <h1 className='min-header'>{TestimoniesL.header}</h1>
        </div>
        <div className='row-item pr-2'>
          <p className='sm-text '>{TestimoniesL.content}</p>
        </div>
      </div>

      <div className='row'>
          {TestList}
      </div>


    </section>
  )
}
