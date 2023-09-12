import React from 'react'
import Head from 'next/head'
import { type GetStaticProps } from 'next'
import { Fade } from 'react-awesome-reveal'
import { getPreviewPosts } from '../services'
import { Layout, BlogCard } from '../components'
import { QueryClient, useQuery, dehydrate } from 'react-query'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], getPreviewPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
    revalidate: 1
  }
}

export default function Blog() {
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPreviewPosts })

  console.log(data)

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout>
        <main>
          <Fade triggerOnce cascade damping={0.1}>
            <h1 className='mb-10 w-fit text-3xl font-bold text-gray-light'>
              Confira os meus últimos posts!
            </h1>

            <section className='mb-10 flex flex-col gap-2 rounded-md border border-black-medium p-5 text-gray-light'>
              <p>
                Nessa seção você pode ver alguns dos meus posts desenvolvidos durante a
                minha jornada como desenvolvedor.
              </p>
            </section>

            <div className='grid grid-cols-1 place-items-center grid-rows gap-5 md:grid-cols-2 md:place-items-start lg:grid-cols-3'>
              {data?.allPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  coverImage={post.coverImage.url}
                />
              ))}
            </div>
          </Fade>
        </main>
      </Layout>
    </>
  )
}
