import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex as="footer" alignItems="center" justifyContent="center" paddingY="5">
      <Text color="gray.500" fontSize="sm" textAlign="center">
        &copy; {new Date().getFullYear()}{' '}
        <Link href="https://progmar.dev" isExternal>
          Marcelo Pecin
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
