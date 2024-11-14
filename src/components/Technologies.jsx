import { RiReactjsLine } from 'react-icons/ri';
import { FaAws } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsUnity } from "react-icons/bs";
import { motion } from 'framer-motion';

const iconVariants = (duration, delay) => ({
    initial: { y: 0 },
    animate: {
        y: [15, -15],
        transition: {
            duration: duration,
            delay: delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div 
                variants={iconVariants(2.5, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5, 0.35)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-blue-900"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5, 0.7)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoDjango className="text-7xl text-emerald-900"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5, 1.05)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5, 1.4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5, 1.75)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsUnity className="text-7xl text-gray-600"/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies;
