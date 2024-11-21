import React, { useState } from 'react';
import './App.css';


function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleAddTask = () => {
    if (taskInput && descriptionInput) {
      const newTask = {
        id: Date.now(),
        title: taskInput,
        description: descriptionInput,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
      setDescriptionInput('');
    }
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      
      {/* Campo para adicionar tarefa */}
      <input 
        type="text" 
        placeholder="Título da Tarefa"
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
      />
      
      <textarea 
        placeholder="Descrição da Tarefa" 
        value={descriptionInput} 
        onChange={(e) => setDescriptionInput(e.target.value)} 
      />
      
      <button className="btn-add" onClick={handleAddTask}>Adicionar Tarefa</button>
      
      {/* Renderizando as tarefas */}
      <div>
        {tasks.map(task => (
          <div 
            key={task.id} 
            className="task"
            style={{
              backgroundColor: task.completed ? '#4CAF50' : '#f9f9f9',
            }}
          >
            <div className="task-info">
              {/* Apenas o texto da tarefa será tachado */}
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <strong>{task.title}</strong>
              </span>
              <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.description}</p>
            </div>
            
            {/* Botões de ação */}
            <div className="task-actions">
              <button className="btn-mark" onClick={() => toggleCompletion(task.id)}>
                {task.completed ? 'Desmarcar' : 'Marcar Concluída'}
              </button>
              <button className="btn-del" onClick={() => deleteTask(task.id)}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
