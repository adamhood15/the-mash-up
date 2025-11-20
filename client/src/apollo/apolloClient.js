import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((operation, { headers }) => {
  const token = localStorage.getItem('id_token')

  const isPublic =
    operation.operationName === 'addUser' || operation.operationName === 'login'

  return {
    headers: {
      ...headers,
      authorization: !isPublic && token ? `Bearer ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
