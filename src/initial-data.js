const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Learn React' },
      'task-2': { id: 'task-2', content: 'Code using Redux' },
      'task-3': { id: 'task-3', content: 'Create an api' },
      'task-4': { id: 'task-4', content: 'Style an app' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Coding tasks',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Thinking tasks',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'Others',
        taskIds: [],
      }

    },
    ColumnOrder: ['column-1', 'column-2', 'column-3'],
  };
  
  
  export default initialData;
