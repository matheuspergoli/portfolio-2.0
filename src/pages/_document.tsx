import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-black-dark selection:bg-transparent'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
