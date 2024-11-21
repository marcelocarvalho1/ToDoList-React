
import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task">
  <div className="task-content">
    {/* Conteúdo da tarefa, como título e descrição */}
    <p>{tarefa.titulo}</p>
    <p>{tarefa.descricao}</p>
  </div>
  <div className="task-buttons">
    <button className="btn-mark">Marcar Concluída</button>
    <button className="btn-del">Excluir</button>
  </div>
</div>

  );
};

export default Task;
