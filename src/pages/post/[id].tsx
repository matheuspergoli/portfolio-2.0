import Head from 'next/head'
import { StructuredText } from 'react-datocms'
import { BlogCard, Layout } from '../../components'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { getPreviewPosts, getPostSlugs, getPost } from '../../services'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const queryClient = new QueryClient()
  const id = context?.params?.id as string

  await queryClient.prefetchQuery(['post', id], () => getPost(id))
  await queryClient.prefetchQuery(['posts'], getPreviewPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: id
    },
    revalidate: 1
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPostSlugs()).allPosts.map((post) => {
    return {
      params: { id: post.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default function PostPage(props: { id: string }) {
  const { data } = useQuery({
    queryKey: ['post', props.id],
    queryFn: () => getPost(props.id)
  })
  const { data: morePosts } = useQuery({ queryKey: ['posts'], queryFn: getPreviewPosts })

  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Layout>
        <main>
          <section className='prose prose-sm prose-invert mx-auto mb-10 max-w-3xl px-3 md:prose-base prose-pre:bg-[#1f2937] sm:px-0'>
            <StructuredText
              data={data?.post.content}
              renderBlock={({ record }: any) => (
                <img src={record.image.url} alt={record.image.alt} />
              )}
            />
          </section>

          {morePosts && (
            <section className='mb-10 flex flex-col gap-2 text-gray-light'>
              <p className='my-10 rounded-md border border-black-medium p-5 text-xl font-bold'>
                Confira outros posts que eu já escrevi!
              </p>
              <div className='grid-rows grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:place-items-start lg:grid-cols-3'>
                {morePosts?.allPosts
                  .filter((post) => post.slug !== props.id)
                  .slice(0, 3)
                  .map((post) => (
                    <BlogCard
                      key={post.id}
                      slug={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      coverImage={post.coverImage.url}
                    />
                  ))}
              </div>
            </section>
          )}
        </main>
      </Layout>
    </>
  )
}
