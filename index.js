import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers.js';
import typeDefs from './typeDefs.js';

(async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    const { url } = await server.listen(4000);
    console.log(`Server listening for queries at ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
