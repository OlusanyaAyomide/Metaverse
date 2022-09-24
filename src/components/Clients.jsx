import React from 'react'
import { binance,airbnb,coinbase,dropbox} from '../assets'
import { ClientConst } from '../constants'

export default function Clients() {
  return (
    <section className='mt-5 lg:mt-10 text-white mb-20'>
      <div className="row">
        <div className='row-item flex lg:justify-around justify-between px-10 lg:px-5 mb-3 lg:mb-0'>
          <img src={airbnb} alt="airbnb"  className='min-image' />
          <img src={binance} alt="binance"  className='min-image' />
        </div>
        <div className='row-item flex lg:justify-around justify-between px-10 lg:px-5'>
          <img src={coinbase} alt="coinbase"  className='min-image' />
          <img src={dropbox} alt="dropbox"  className='min-image' />
        </div>
      </div>

      <div className='mt-5 w-full p-5 relative rounded-xl flex overflow-hidden client-cover row'>
        <div className='w-full lg:w-7/12 mb-5 lg:mb-0 pr-5 lg:pr-0'>
          <h1 className='min-header mb-2'>{ClientConst.header}</h1>
          <p className='sm-text'>{ClientConst.content}</p>
        </div>
        <div className='flex lg:h-[100px] flex-col justify-center items-center w-full lg:w-5/12 pl-5 lg:pl-0'>
            <div className='flex justify-center'><button className='outline-none text-[14px] bg-blue-gradient rounded-md inline-block mt-5 py-1 px-2 text-black/80 font-semibold'>Get Started</button></div>
        </div>
      </div>
    </section>
  )
}
