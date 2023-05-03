import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
  query ($eq: String!) {
    post(filter: { slug: { eq: $eq } }) {
      id
      title
      content {
        value
        blocks {
          id
          image {
            url
            alt
          }
        }
      }
      coverImage {
        url
      }
    }
  }
`

export const getPost = async (variables: string) => {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_BLOG_KEY
    }
  })
  return (await graphQLClient.request(query, { eq: variables })) as Post
}
