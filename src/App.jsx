import React from 'react'
import styles from './style.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from "./components/About.jsx"
import Explore from './components/Explore.jsx'
import GetStarted from './components/GetStarted.jsx'
import WhatsNew from './components/WhatsNew.jsx'
import Tracker from './components/Tracker.jsx'
import Insights from './components/Insights.jsx'
import Glass from './components/Glass.jsx'
import Footer from './components/Footer.jsx'
import Animate from './components/Animate.jsx'
import { useEffect,useState } from 'react'


function App(){
    const [isAnimating,setIsAnimating] = useState(true)
    useEffect(()=>{
        setTimeout(()=>setIsAnimating(false),6000)
    },[])
    if(!isAnimating){
        return (
            <div className='bg-[#1a232e] overflow-hidden'>
                <Navbar/>
                <Hero/>
                <About/>
                <Explore/>
                <GetStarted/>
                <WhatsNew/>
                <Tracker/>
                <Insights/>
                <Glass/>
                <Footer/>
            </div>
          )
    }
    if(isAnimating){
        return(
            <><Animate/></>
        )
    }

}

export default App
