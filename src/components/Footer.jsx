import React from 'react'
import { logo } from '../assets'
import { footerLinks2,FooterContent} from '../constants'

const AllList = footerLinks2.map((item,key1)=>{
  return(
  <div className='w-4/12' key={key1}>
      <h1 className='sm-text text-white/80 mb-5 lg:text-base'>{item.title}</h1>
      <ul className='w-full'>
      {item.links.map((link,key2)=>{
        return(
            <li key={key2} className='sm-text text-[10px] my-2 lg:text-[12px]'><a href={link.link}>{link.name}</a></li>
        )
      })}
      </ul>
  </div>
  )
}
)

export default function Footer() {
  return (
    <section className='row pt-10 border-b-2 border-white/70'>
      <div className='w-full lg:w-5/12 mb-10 mx-auto'>
        <div className='lg:pr-10 mb-5'>
            <img src={logo} alt="" className='w-[120px] h-[35]'/>
        </div> 
        <p className='sm-text'>{FooterContent.content}</p>
      </div>
      <div className='w-full lg:w-7/12 flex '>
        {AllList}
      </div>
    </section>
  )
}
