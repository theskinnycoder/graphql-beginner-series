import { gql } from '@apollo/client';

export const HELLO = gql`
  query HelloThere {
    helloThere
  }
`;

export const GET_ALL_TASKS = gql`
  query GetAllTasks {
    tasks {
      id
      content
      isDone
    }
  }
`;

export const GET_TASK_BY_ID = gql`
  query GetTaskByID($id: ID!) {
    task(id: $id) {
      id
      content
      isDone
    }
  }
`;
