import React from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { IntroPage } from '../components'
import { AnimatePresence } from 'framer-motion'

import 'swiper/css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const componentKey = router.asPath

  const [isMounted, setIsMounted] = React.useState(true)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}>
      {isMounted ? <IntroPage /> : <Component key={componentKey} {...pageProps} />}
    </AnimatePresence>
  )
}
