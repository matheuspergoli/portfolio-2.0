import React from 'react'
import Head from 'next/head'
import { motion as m } from 'framer-motion'

export const IntroPage = () => {
  return (
    <>
      <Head>
        <title>Matheus Pergoli | Portfólio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='flex h-screen flex-col items-center justify-center bg-black-dark'>
        <h1 className='text-gray-light'>
          <span className='text-4xl font-bold'>Matheus Pergoli</span> Portfólio
        </h1>
      </m.div>
    </>
  )
}
