import { Box, Image, useColorModeValue } from '@chakra-ui/react'

interface CreditCardComponentProps {
  children: React.ReactNode
  brand: string
}

const CreditCardComponent = ({ children, brand }: CreditCardComponentProps) => {
  const bgCard = useColorModeValue('gray.50', 'gray.700')

  return (
    <Box
      background={bgCard}
      paddingX="4rem"
      paddingY="2rem"
      borderRadius={10}
      boxShadow="lg"
      position="relative"
    >
      {children}

      <Box
        width="3rem"
        height="auto"
        position="absolute"
        right="4rem"
        bottom="2.5rem"
      >
        <Image src={`/brands/${brand}.svg`} alt="Mastercard" />
      </Box>
    </Box>
  )
}

export default CreditCardComponent
