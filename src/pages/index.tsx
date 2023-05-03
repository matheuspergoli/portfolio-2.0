import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Fade } from 'react-awesome-reveal'
import { getAllProjects } from '../services'
import { QueryClient, useQuery, dehydrate } from 'react-query'
import { Layout, Skills, Card, SocialMediaLinks } from '../components'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('projects', getAllProjects)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
    revalidate: 1
  }
}

export default function Home() {
  const { data } = useQuery({ queryKey: 'projects', queryFn: getAllProjects })

  const firstThreeProjects = data?.allProjetos.slice(0, 3)

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
                {firstThreeProjects?.map((project) => (
                  <Card
                    key={project.id}
                    image={project.imagem.url}
                    link={project.link}
                    repoUrl={project.repositorio}
                    title={project.nome}
                  />
                ))}
              </div>
            </section>
          </Fade>
        </main>
      </Layout>
    </>
  )
}
