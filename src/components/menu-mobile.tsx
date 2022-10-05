import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import { List } from 'phosphor-react'

import AppIcon from './app-icon'

const MobileMenu = () => {
  const router = useRouter()

  const bgList = useColorModeValue('white', 'gray.900')
  const bg = useColorModeValue('purple.500', 'orange.200')
  const color = useColorModeValue('white', 'gray.900')

  const isActive = (href: string) => {
    return router.pathname === href
  }

  return (
    <Menu isLazy id="mobile-menu">
      <MenuButton
        as={IconButton}
        aria-label="Toggle Menu"
        icon={<AppIcon icon={List} />}
        variant="outline"
      />
      <MenuList bg={bgList}>
        <NextLink href="/" passHref>
          <MenuItem
            as={Link}
            bg={isActive('/') ? bg : undefined}
            color={isActive('/') ? color : undefined}
            _active={{}}
            _focus={{}}
          >
            Documentos
          </MenuItem>
        </NextLink>
        <NextLink href="/credit-card" passHref>
          <MenuItem
            as={Link}
            bg={isActive('/credit-card') ? bg : undefined}
            color={isActive('/credit-card') ? color : undefined}
            _active={{}}
            _focus={{}}
          >
            Cartão de Crédito
          </MenuItem>
        </NextLink>
        <NextLink href="/json-pretty" passHref>
          <MenuItem
            as={Link}
            bg={isActive('/json-pretty') ? bg : undefined}
            color={isActive('/json-pretty') ? color : undefined}
            _active={{}}
            _focus={{}}
          >
            JSON Pretty
          </MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  )
}

export default MobileMenu
