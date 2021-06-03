import { gql } from 'apollo-server';

const typeDefs = gql`
  type Task {
    id: ID!
    content: String!
    isDone: Boolean!
  }

  type Query {
    helloThere: String!
    tasks: [Task!]!
    task(id: ID!): Task!
  }

  type Mutation {
    newTask(content: String!): Task!
    updateTask(id: ID!): Task!
    deleteTask(id: ID!): ID!
  }
`;

export default typeDefs;
