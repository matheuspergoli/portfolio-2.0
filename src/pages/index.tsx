import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { Layout, Skills, CardWithModal, SocialMediaLinks } from '../components'

export default function Home() {
  const projects = [
    {
      id: '1',
      title: 'Projeto 1',
      subtitle: 'Subtitle 1',
      stack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: '2',
      title: 'Projeto 2',
      subtitle: 'Subtitle 2',
      stack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: '3',
      title: 'Projeto 3',
      subtitle: 'Subtitle 3',
      stack: ['React', 'Next', 'NodeJS', 'TypeScript']
    }
  ]

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <main>
          <Fade triggerOnce cascade damping={0.1}>
            <h1 className='w-fit text-3xl font-bold text-gray-light'>
              Bem vindo ao meu Portfólio!
            </h1>

            <p className='mb-5 text-xl text-gray-light'>
              Desenvolvedor Fullstack Javascript Júnior com foco em NextJS e NodeJS.
            </p>

            <SocialMediaLinks />

            <section className='my-10 flex flex-col gap-2 rounded-md border border-black-medium p-5 text-gray-light'>
              <p>
                Me chamo Matheus Pergoli, tenho 23 anos e sou Desenvolvedor Fullstack
                Javascript Júnior com foco no desenvolvimento web com NextJS e NodeJS.
              </p>
              <p>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na
                Universidade UNIASSELVI. Tenho experiência com desenvolvimento web desde
                2022, quando comecei a estudar HTML, CSS e JavaScript.
              </p>
              <p>
                Desde então, venho me aperfeiçoando e estudando novas tecnologias, como
                ReactJS, NextJS, NodeJS, TypeScript, entre outras.
              </p>
            </section>

            <section className='mb-10 flex flex-col text-gray-light'>
              <h2 className='mb-3 w-fit text-2xl font-bold'>
                Tecnologias que mais utilizo
              </h2>

              <Skills />
            </section>

            <section>
              <div className='mb-3 flex items-center justify-between text-gray-light'>
                <h2 className='text-2xl font-bold'>Projetos recentes</h2>

                <Link href='/projetos' className='font-semibold'>
                  Ver mais
                </Link>
              </div>

              <div className='grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                  <CardWithModal key={project.id} {...project} />
                ))}
              </div>
            </section>
          </Fade>
        </main>
      </Layout>
    </>
  )
}
