import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Link, useColorModeValue } from '@chakra-ui/react'

interface NavLinkProps {
  children: React.ReactNode
  href: string
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <NextLink href={href} passHref>
      <Link
        borderBottomColor={useColorModeValue('purple.500', 'orange.200')}
        borderBottomStyle="dashed"
        borderBottomWidth={isActive ? '0.125rem' : undefined}
        _hover={{}}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default NavLink
