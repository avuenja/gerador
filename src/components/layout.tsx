import Head from 'next/head'
import { Container, Flex } from '@chakra-ui/react'

import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Gerador, deixando seu trabalho dev, ainda mais fácil!."
        />
        <meta name="author" content="Marcelo Pecin" />
        <meta name="author" content="avuenja" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Gerador | Homepage</title>
      </Head>

      <Flex direction="column" height="100vh">
        <Navbar />

        <Container maxWidth="container.sm" display="flex" flex="1">
          {children}
        </Container>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout
