import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    helloThere: String!
  }
`;

export default typeDefs;
