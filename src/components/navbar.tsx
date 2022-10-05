import { Box, Container, Heading, Hide, HStack, Show } from '@chakra-ui/react'
import Link from 'next/link'

import NavLink from './nav-link'
import ToggleTheme from './toggle-theme'
import MobileMenu from './menu-mobile'

const Navbar = () => {
  return (
    <Box as="nav">
      <Container
        maxWidth="container.xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY="5"
      >
        <HStack spacing="20">
          <Link href="/">
            <Heading as="h1" cursor="pointer">
              Gerador
            </Heading>
          </Link>

          <Show above="sm">
            <HStack spacing="5">
              <NavLink href="/">Documentos</NavLink>
              <NavLink href="/credit-card">Cartão de Crédito</NavLink>
              <NavLink href="/json-pretty">JSON Pretty</NavLink>
            </HStack>
          </Show>
        </HStack>

        <HStack spacing="2.5">
          <ToggleTheme />

          <Hide above="sm">
            <MobileMenu />
          </Hide>
        </HStack>
      </Container>
    </Box>
  )
}

export default Navbar
