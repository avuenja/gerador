import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/theme'
import Layout from '@/components/layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="g-tag" strategy="lazyOnload">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
             page_path: window.location.pathname,
             });
         `}
      </Script>

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
