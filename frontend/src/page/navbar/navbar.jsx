import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className='flex justify-center text-3xl'>
        <div className='bg-amber-500 px-6 flex justify-center rounded-2xl mt-5 py-1 shadow-md'>
          Convert IT
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar