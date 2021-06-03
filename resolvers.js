let tasks = [
  {
    id: 1,
    content: 'Go to the store',
    isDone: true,
  },
  {
    id: 2,
    content: 'Make a GraphQL Mini Series',
    isDone: false,
  },
  {
    id: 3,
    content: 'Feed the dog',
    isDone: true,
  },
];

const resolvers = {
  Query: {
    helloThere: () => 'General Kenobi',
    tasks: () => tasks,
    task: (_, { id }) => tasks.find((task) => task.id === id),
  },
  Mutation: {
    newTask: (_, { content }) => {
      const newTask = { id: tasks.length + 1, content, isDone: false };
      tasks = [...tasks, newTask];
      return newTask;
    },
    updateTask: (_, { id }) => {
      let updatedTask;
      tasks = tasks.map((task) => {
        if (task.id == parseInt(id)) {
          task.isDone = !task.isDone;
          updatedTask = task;
        }
        return task;
      });
      return updatedTask;
    },
    deleteTask: (_, { id }) => {
      tasks = tasks.filter((task) => task.id !== parseInt(id));
      return id;
    },
  },
};

export default resolvers;
