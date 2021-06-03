import { gql } from '@apollo/client';

export const ADD_NEW_TASK = gql`
  mutation AddNewTask($content: String!) {
    newTask(content: $content) {
      id
      content
      isDone
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!) {
    updateTask(id: $id) {
      id
      content
      isDone
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;
