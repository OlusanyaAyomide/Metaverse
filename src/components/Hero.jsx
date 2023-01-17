import { slideIn,staggerContainer,textVariant ,madness} from "../../utils/motion"
import { motion } from "framer-motion";
export default function Hero(){
    return(
    <section className="py-12 sm:py-16 px-6 sm:px-16 overflow-hidden">
      <motion.div variants={staggerContainer(1,1)} initial="hidden" whileInView="show" className="max-width flex flex-col">
        <div className="relative w-full z-10 ">
          <motion.h1 className="my-1 w-full heroheading text-center" variants={textVariant(1.2)} initial="hidden" whileInView={"show"}>Metaverse</motion.h1>
          <motion.div variants={madness} initial="hidden" whileInView="animate" className="text-white justify-center items-center flex"><span className="heroheading">MA</span><div className="herodtext"></div><span className="heroheading">NESS</span></motion.div>
        </div>
        <motion.div variants={slideIn("right","tween",0.1,1)} initial="hidden" whileInView="show" animate="show" className="-mr-20 pl-4">
          <div className="relative w-full -mt-6 md:-mt-10 z-0 rounded-tl-[20%] rounded-tr-2xl hero-gradient overflow-hidden">
              <img src="./cover.png" alt="cover" className="h-[400px] md:h-300px object-cover w-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
    )
}
