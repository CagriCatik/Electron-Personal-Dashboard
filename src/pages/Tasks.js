// src/pages/Tasks.js
import React, { useState } from 'react';
import { FaCheck, FaTrash, FaPlus } from 'react-icons/fa';
import "../styles/Tasks.css"; // Import custom styles

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Handle adding a new task
  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') return;

    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput('');
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit" className="add-task-button">
          <FaPlus />
        </button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks-message">No tasks available. Add a new task!</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
              <div className="task-actions">
                <button onClick={() => toggleComplete(task.id)} className="complete-button">
                  <FaCheck />
                </button>
                <button onClick={() => deleteTask(task.id)} className="delete-button">
                  <FaTrash />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Tasks;
