import { motion } from 'framer-motion'
import { IconButton, Tooltip, type IconButtonProps } from '@chakra-ui/react'

interface AppButtonProps extends IconButtonProps {
  motionKey: string | number
  tooltip: string
}

const AppButton = ({ motionKey, tooltip, ...props }: AppButtonProps) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Tooltip label={tooltip}>
        <IconButton {...props} />
      </Tooltip>
    </motion.div>
  )
}

export default AppButton
