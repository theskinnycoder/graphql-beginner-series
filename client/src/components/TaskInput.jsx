import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_NEW_TASK } from '../graphql/mutations.js';
import { GET_ALL_TASKS } from '../graphql/queries.js';

const TaskInput = () => {
  const [content, setContent] = useState('');
  const [addTask] = useMutation(ADD_NEW_TASK, { refetchQueries: [{ query: GET_ALL_TASKS }] });

  const submitHandler = (e) => {
    e.preventDefault();
    addTask({ variables: { content } });
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        style={{ padding: '15px', width: '400px', marginTop: '20px' }}
        type='text'
        name='task'
        onChange={(e) => setContent(e.target.value)}
        autoComplete='off'
        value={content}
        placeholder='Enter any task...'
        autoFocus
      />
    </form>
  );
};

export default TaskInput;
