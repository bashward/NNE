import React from 'react'
import {motion} from 'framer-motion'

const FloatT = () => {
 
const transformerVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: [1, 0.8, 1],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
        },
        opacity: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        },
      },
    },
}


  return (
    <motion.div
    className="floating-transformer"
    variants={transformerVariants}
    initial="initial"
    animate="animate"
  >
    <img src={require('../Content/c5.png')} alt="Transformer" className="w-[10rem]" />
  </motion.div>
  )
}

export default FloatT
