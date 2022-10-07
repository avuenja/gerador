import { Box, Image, useColorModeValue } from '@chakra-ui/react'

interface CreditCardComponentProps {
  children: React.ReactNode
  brand: string
}

const CreditCardComponent = ({ children, brand }: CreditCardComponentProps) => {
  const bgCard = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      background={bgCard}
      paddingX={{ base: '1rem', md: '4rem' }}
      paddingY="2rem"
      borderRadius={10}
      boxShadow="lg"
      position="relative"
      width={{ base: '100%', sm: '23rem' }}
    >
      {children}

      <Box
        width="3rem"
        height="auto"
        position="absolute"
        right={{ base: '2rem', md: '4rem' }}
        bottom="2.5rem"
      >
        <Image src={`/brands/${brand}.svg`} alt="Mastercard" />
      </Box>
    </Box>
  )
}

export default CreditCardComponent
