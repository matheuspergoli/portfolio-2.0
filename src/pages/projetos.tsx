import React from 'react'
import Head from 'next/head'
import { type GetStaticProps } from 'next'
import { Fade } from 'react-awesome-reveal'
import { Layout, Card } from '../components'
import { getAllProjects } from '../services'
import { QueryClient, useQuery, dehydrate } from 'react-query'

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

export default function Projetos() {
  const { data } = useQuery({ queryKey: 'projects', queryFn: getAllProjects })

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Layout>
        <main>
          <Fade triggerOnce cascade damping={0.1}>
            <h1 className='mb-10 w-fit text-3xl font-bold text-gray-light'>
              Veja um pouco do meu trabalho!
            </h1>

            <section className='mb-10 flex flex-col gap-2 rounded-md border border-black-medium p-5 text-gray-light'>
              <p>
                Nessa seção você pode ver alguns dos meus projetos desenvolvidos durante a
                minha jornada como desenvolvedor.
              </p>

              <p>
                Você encontrará projetos desenvolvidos utilizando desde as tecnologias
                mais simples como HTML, CSS e JavaScript, até projetos mais complexos
                utilizando React, Next, NodeJS, TypeScript, Banco de Dados, etc.
              </p>
            </section>

            <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:place-items-start lg:grid-cols-3'>
              {data?.allProjetos.map((project) => (
                <Card
                  key={project.id}
                  image={project.imagem.url}
                  link={project.link}
                  repoUrl={project.repositorio}
                  title={project.nome}
                />
              ))}
            </div>
          </Fade>
        </main>
      </Layout>
    </>
  )
}
