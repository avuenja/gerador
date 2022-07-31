import { motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonStars, SunDim } from 'phosphor-react'

import AppIcon from './app-icon'

const ToggleTheme = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <motion.div
      key={useColorModeValue('light', 'dark')}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        onClick={toggleColorMode}
        icon={useColorModeValue(
          <AppIcon icon={MoonStars} />,
          <AppIcon icon={SunDim} />
        )}
      />
    </motion.div>
  )
}

export default ToggleTheme
