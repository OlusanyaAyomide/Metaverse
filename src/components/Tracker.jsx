import React,{useEffect} from 'react'
import { motion,useAnimation } from 'framer-motion'
import { HeaderText } from '../constants'
import { fadeUp,Spinner,planet } from '../../utils/motion'
import { map,people1,people2,people3,Planet02,planet05} from '../assests/exporter'
import { useInView } from 'react-intersection-observer'

export default function Tracker() {
  const [ref,isInView] = useInView()
  const control = useAnimation()
  useEffect(()=>{
    if(isInView){
      control.start("animate")}
    else(control.start("initial"))
  },[isInView])
  return (
    <section className='cont -mt-16 py-2 pb-32 relative'>
        <h1 className='mb-2 min-header text-center'>People on the World</h1>
        <motion.h1 className='text-center big-header mb-4 text-2xl md:text-4xl lg:text-5xl' variants={fadeUp} initial="initial" whileInView="animate">{HeaderText.text}</motion.h1>
        <div className='-mx-3 md:mx-none relative mt-6 pt-8 md:w-8/12 md:mx-auto' ref={ref}>
            <div className='h-[350px] w-full'>
                <img src={map} alt="Map" className='  h-full w-full'  />
            </div>

            <motion.div className='people-cont bottom-14 right-7 md:right-12 lg:right-14 before:bg-[#ee5d24]' variants={Spinner("right")} initial="initial" animate={control}>
              <img src={people1} alt="People1" className='track-image'/>
            </motion.div>

            <motion.div className='people-cont left-12 md:left-20 top-16 before:bg-pink-400' variants={Spinner("left")} initial="initial" animate={control}>
              <img src={people2} alt="People" className='track-image'/>
            </motion.div>

            <motion.div className='people-cont left-36 sm:left-64 md:left-48px lg:left-80 top-36 before:bg-blue-300/30' variants={Spinner("center")} initial="initial" animate={control}>
              <img src={people3} alt="People" className='track-image' />
            </motion.div>

            <motion.div className='planet-cont before:bg-[#5f8ac2]/70 top-16 right-20 md:right-32 lg:right-40' variants={planet("up")} initial="initial" animate={control}>
              <img src={planet05} alt="planet02" className='planet-img '/>
            </motion.div>
            <motion.div className='planet-cont before:bg-[#e650e6]/50 bottom-16 left-20 md:left-32 lg:left-40' variants={planet("down")} initial="initial" animate={control}>
              <img src={Planet02} alt="planet02" className='planet-img '/>
            </motion.div>
        </div>
        <div className='absolute bottom-0 -left-20 w-3/12 -rotate-12 md:w-2/12 h-[300px] rounded-[35%] track-grad'></div>
    </section>
  )
}
