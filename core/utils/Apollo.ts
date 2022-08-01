import { ApolloClient, InMemoryCache } from '@apollo/client';
import { environment } from '../../environments/environment';

const client = new ApolloClient ({
  uri: environment.apiUrl,
  cache: new InMemoryCache()
})

export default client
