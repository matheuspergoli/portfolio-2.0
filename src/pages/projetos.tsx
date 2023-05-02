import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import { Hoverable } from '../animations/Hoverable'
import { Layout } from '../components/Shared/Layout'
import { CardWithModal } from '../components/CardWithModal'

export default function Projetos() {
  const items = [
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
    },
    {
      id: '4',
      title: 'Projeto 4',
      subtitle: 'Subtitle 4',
      stack: ['React', 'Next', 'NodeJS', 'MongoDB']
    },
    {
      id: '5',
      title: 'Projeto 5',
      subtitle: 'Subtitle 5',
      stack: ['Vue', 'SCSS', 'NodeJS']
    },
    {
      id: '6',
      title: 'Projeto 6',
      subtitle: 'Subtitle 6',
      stack: ['React', 'Next', 'NodeJS', 'TypeScript']
    }
  ]

  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Layout>
        <main>
          <Fade triggerOnce cascade damping={0.1}>
            <Hoverable>
              <h1 className='mb-10 w-fit text-3xl font-bold text-gray-light'>
                Veja um pouco do meu trabalho!
              </h1>
            </Hoverable>

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
              {items.map((projeto) => (
                <CardWithModal key={projeto.id} {...projeto} />
              ))}
            </div>
          </Fade>
        </main>
      </Layout>
    </>
  )
}
