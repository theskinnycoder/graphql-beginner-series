import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import TaskInput from './components/TaskInput.jsx';
import TasksList from './components/TasksList.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Tasks Tracker</h1>
      <small>
        Left-Click to <strong>Mark As Done</strong>
        <br />
        Right-Click to <strong>Delete</strong>
      </small>
      <TaskInput />
      <TasksList />
    </ApolloProvider>
  );
};

export default App;
