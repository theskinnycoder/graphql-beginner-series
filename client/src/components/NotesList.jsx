import { useQuery } from '@apollo/client';
import React from 'react';
import { HELLO } from '../graphql/queries.js';

const NotesList = () => {
  const { data, loading, error } = useQuery(HELLO);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return <h1>{data.helloThere}</h1>;
};

export default NotesList;
