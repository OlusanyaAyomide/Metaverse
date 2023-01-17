import {MetaverseWord} from "../constants/index"
import { motion } from "framer-motion";
import { AboutF,FadeIn } from "../../utils/motion";

const About = () => (
  <section className="relative pt-16 -mt-8 cont z-10  pb-32">
    <motion.div className="absolute h-[300px] w-5/12 md:3/12 lg:w-2/12 -z-10 about-grad top-0 -right-20 rounded-[40%]" variants={FadeIn} initial="initial" whileInView="animate">
    </motion.div>
    <motion.div className="px-1" variants={AboutF} initial="initial" whileInView="animate">
      <h1 className="text-center text-sm md:text-base text-gray-400">
        <span className="text-base md:text-lg font-[500] text-white mr-1">Metaverse </span><span> {MetaverseWord.data}</span>
      </h1>
    </motion.div>
    <motion.div className="absolute bottom-5 -z-10 left-0 w-5/12 md:3/12 lg:w-2/12 h-[150px] about-grad-2 rounded-[30%] rotate-[-20deg] rounded-tr-full rounded-br-full " variants={FadeIn} initial="initial" whileInView="animate" ></motion.div>
  </section>
);

export default About;
