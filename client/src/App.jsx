import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import TasksList from './components/TasksList.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Tasks Tracker</h1>
      <TasksList />
    </ApolloProvider>
  );
};

export default App;
