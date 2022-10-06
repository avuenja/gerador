import React from 'react'
import { motion } from 'framer-motion'

interface TextAnimatedProps {
  motionKey: string | number
  children: React.ReactNode
}

const TextAnimated = ({ motionKey, children }: TextAnimatedProps) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default TextAnimated
