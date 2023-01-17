import {motion} from "framer-motion"
import { navVariants } from "../../utils/motion";



export default function Navbar(){
    return(
    <motion.div variants={navVariants} initial="hidden" animate="show" className="px-6 py-8 relative">
        <div className="absolute w-6/12 inset-0 mygrad-01 border"></div>
        <div className="flex justify-between max-width">
            <img src="./search.svg" alt="search" className="h-[24px] w-[24px]"/>
            <h1 className="text-2xl z-20 font-extrabold text-white leading-[24px]">METAVERSUS</h1>
            <button><img src="./menu.svg" alt="menu" className="h-[24px] w-[24px]"/></button>        
        </div>
    </motion.div>
    )
  
}
