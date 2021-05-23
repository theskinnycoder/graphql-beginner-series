import { gql } from "apollo-server";

const typeDefs = gql`
  type Task {
    id: ID!
    content: String!
    isDone: Boolean!
  }

  type Query {
    helloThere: String!
    sayCheese: String
    names: [String!]!
    tasks: [Task!]!
  }

  type Mutation {
    newTask(content: String!): Task!
    updateTask: Task!
    deleteTask(id: ID!): ID!
  }
`;

export default typeDefs;
