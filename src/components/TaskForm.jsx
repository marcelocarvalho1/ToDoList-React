
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) return; 
    addTask({ title: taskTitle, description: taskDescription, completed: false });
    setTaskTitle(''); 
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Título da tarefa"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Descrição da tarefa"
      />
      <button className='btn-add' type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
