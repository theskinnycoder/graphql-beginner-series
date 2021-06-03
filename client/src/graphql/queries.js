import { gql } from '@apollo/client';

export const HELLO = gql`
  query HelloThere {
    helloThere
  }
`;
