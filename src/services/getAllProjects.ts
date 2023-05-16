import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'

const query = gql`
  query {
    allProjetos(orderBy: _createdAt_DESC, first: "35") {
      id
      nome
      link
      repositorio
      imagem {
        url
      }
    }
  }
`

export const getAllProjects = async () => {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_PORTFOLIO_KEY
    }
  })
  return (await graphQLClient.request(query)) as Projects
}
