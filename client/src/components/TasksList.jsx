import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_TASKS } from '../graphql/queries.js';
import TaskItem from './TaskItem.jsx';

const TasksList = () => {
  const { data, loading, error } = useQuery(GET_ALL_TASKS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <ul>
      {data.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
