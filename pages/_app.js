import '@/styles/globals.css'
import '@/styles/particle.scss'
import '@/styles/square.css'

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
