import React from 'react'
import styles from './style.js'
import {Hero,Business,Carddeal,Clients,CTA,Footer,GetStarted,Navbar,Stats,Testimonies} from "./components/index"
import {useState,useEffect} from 'react'

function App(){
    const [isloading,setisloading] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
                setisloading(true)
        },2000)
    },[])

    if (!isloading){
        return(
            <Business/>
        )
    }
    return (
        <div className='bg-[#00040F]'>
            <div className='container'><Navbar/></div>
            <div className='container'><Hero/></div>
            <div className='container'><GetStarted/></div>
            <div className="container"><Stats/></div>
            <div className="container"><Carddeal/></div>
            <div className="container"><Testimonies/></div>
            <div className="container"><Clients/></div>
            <div className="container bg-[#0B0A0C99]"><Footer/></div>
            <div className="container bg-[#0B0A0C99]"><CTA/></div>

        </div>
      )
}

export default App
