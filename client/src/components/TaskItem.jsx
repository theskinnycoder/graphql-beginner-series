import { useMutation } from '@apollo/client';
import React from 'react';
import { DELETE_TASK, UPDATE_TASK } from '../graphql/mutations.js';
import { GET_ALL_TASKS } from '../graphql/queries.js';

const TaskItem = ({ task }) => {
  const [updateTask] = useMutation(UPDATE_TASK, { refetchQueries: [{ query: GET_ALL_TASKS }] });
  const [deleteTask] = useMutation(DELETE_TASK, { refetchQueries: [{ query: GET_ALL_TASKS }] });

  const deleteHandler = (e) => {
    e.preventDefault();
    deleteTask({ variables: { id } });
  };

  const { id, content, isDone } = task;
  return (
    <li onClick={() => updateTask({ variables: { id } })} onContextMenu={deleteHandler}>
      <h3 style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{content}</h3>
    </li>
  );
};

export default TaskItem;
