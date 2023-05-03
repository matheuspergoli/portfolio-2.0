import React from 'react'
import { Header, Footer } from '../../'
import { motion as m, useIsPresent } from 'framer-motion'

export const Layout = (props: { children: React.ReactNode }) => {
  const isPresent = useIsPresent()

  return (
    <>
      <m.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className='fixed inset-0 z-10 bg-black-medium'
      />
      <m.div
        className='container mx-auto px-5 pb-5'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}>
        <Header />
        {props.children}
        <Footer />
      </m.div>
    </>
  )
}
