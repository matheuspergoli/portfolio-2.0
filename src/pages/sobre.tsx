import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import { Layout, SocialMediaLinks } from '../components'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Layout>
        <main className='flex flex-col text-gray-light'>
          <Fade triggerOnce cascade damping={0.1}>
            <h1 className='mb-3 w-fit text-3xl font-bold'>Quem sou eu?</h1>

            <section className='mb-10 flex flex-col gap-5 rounded-md border border-black-medium p-5'>
              <p className='text-xl'>
                Um{' '}
                <span className='border-b border-gray-light'>
                  Desenvolvedor Web Fullstack Júnior
                </span>{' '}
                que ama o que faz! Atualmente estou cursando Análise e Desenvolvimento de
                Sistemas na{' '}
                <span className='border-b border-gray-light'>
                  Universidade UNIASSELVI
                </span>
                . Tenho experiência com as tecnologias mais utilizadas no mercado, como{' '}
                <span className='font-bold'>ReactJS</span>,{' '}
                <span className='font-bold'>NextJS</span>,{' '}
                <span className='font-bold'>NodeJS</span>,{' '}
                <span className='font-bold'>TypeScript</span>,{' '}
                <span className='font-bold'>MongoDB</span>, entre outras.
              </p>

              <p className='text-xl'>
                Desde o início de 2023 venho estudando novas tecnologias e frameworks para
                me aperfeiçoar no{' '}
                <span className='border-b border-gray-light'>
                  Desenvolvimento Web Fullstack
                </span>
                .
              </p>

              <p className='text-xl'>
                Atualmente estou estudando <span className='font-bold'>SOLID</span>,{' '}
                <span className='font-bold'>Testes</span> e{' '}
                <span className='font-bold'>Clean Architecture</span> para me tornar um
                bom e experiente{' '}
                <span className='border-b border-gray-light'>
                  Desenvolvedor Fullstack
                </span>
                .
              </p>
            </section>

            <h2 className='mb-3 w-fit text-3xl font-bold'>Como tudo começou?</h2>

            <section className='mb-10 flex flex-col gap-5 rounded-md border border-black-medium p-5'>
              <p className='text-xl'>
                Em setembro de 2021 foi onde eu tive meu primeiro contato com o mundo da
                programação, onde eu comecei a estudar{' '}
                <span className='font-bold'>Python</span> atráves da plataforma do Curso
                em Vídeo.
              </p>

              <p className='text-xl'>
                No começo dos meus estudos eu não sabia qual área da programação eu queria
                seguir, então foi onde eu comecei a me aprofundar mais nesse universo para
                eu poder descobrir qual área eu gostava mais.
              </p>

              <p className='text-xl'>
                Com o passar do tempo e dos estudos, eu fui descobrindo mais sobre{' '}
                <span className='border-b border-gray-light'>Desenvolvimento Web</span> e
                então eu decidi que era isso que eu queria seguir.
              </p>
            </section>

            <h2 className='mb-3 w-fit text-3xl font-bold'>O que faço no tempo livre?</h2>

            <section className='mb-10 flex flex-col gap-5 rounded-md border border-black-medium p-5'>
              <p className='text-xl'>
                Eu gosto de participar de comunidades de desenvolvedores e ajudar as
                pessoas que estão começando a programar.
              </p>

              <p className='text-xl'>
                Sempre gostei de ensinar as pessoas sobre o que eu sei, e não só na
                programação, mas em qualquer área. Utilizo esse tempo para aprender e me
                aperfeiçoar cada vez mais.
              </p>

              <p className='text-xl'>
                Atualmento faço parte de uma comunidade de desenvolvedores em um servidor
                no discord onde eu ajudo as pessoas que estão começando a programar e
                também aprendo com elas. Também criamos projetos para englobar toda a
                comunidade e ajudar as pessoas a aprenderem mais sobre programação.
              </p>
            </section>

            <h2 className='mb-5 w-fit text-3xl font-bold'>Entre em contato comigo!</h2>

            <SocialMediaLinks />
          </Fade>
        </main>
      </Layout>
    </>
  )
}
