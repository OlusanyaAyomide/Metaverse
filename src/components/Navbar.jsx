import React,{useState} from 'react'
import {navLinks} from '../constants/index.js'
import {logo,close,menu} from '../assets/index.js'
import {motion} from 'framer-motion'
import { NavToggle } from './Xanimation.jsx'



export default function Navbar() {
  const [toggle,setToggle] = useState(false)
  function Toggle(){
      setToggle((prev => !prev))
  }
  const newList = navLinks.map((item,key)=>{
      return(
        <li 
        className={`${key != navLinks.length-1?'mr-10':'mr-0'} text-white`}
        key = {key} 
          >{item.title}</li>
      )
  })
  const navLists=navLinks.map((item,key)=>{
      return(
        <a href=""><li className='text-white py-2 px-3 hover:text-[18px] relative before:w-full before:h-full before:inset-0 before:bg-white/20 before:absolute before:rounded-md before:hidden hover:before:block' key={key}>{item.title}</li></a>
      )
  })
  return (
    <div className='relative'>
      <div className='pt-2 flex justify-between'>
        <img src={logo} alt="" className='w-[124px] h-8' />
        <ul className='hidden lg:flex'>
          {newList}
        </ul>
        <img src={toggle?close:menu} alt="menu" onClick={Toggle} className='lg:hidden w-[28px] h-[28px]'/>
      </div>
      {toggle && <motion.div className={` right-0 py-2 top-[40px] rounded-md bg-black-gradient z-20 `} variants={NavToggle} initial="initial" animate="animate">
        <ul className="w-full ">
          {navLists}
        </ul>
      </motion.div>}
    </div>
    
  )
}
