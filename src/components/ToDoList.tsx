import React, { useState, useEffect } from 'react';
import { type Task } from '~/interfaces/Task';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    const storedTasksString: string | null = localStorage.getItem('tasks');
    if (storedTasksString !== null) {
      const storedTasks: Task[] = JSON.parse(storedTasksString) as Task[];
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (index: number, value: string): void => {
    const updatedTasks: Task[] = [...tasks];
    const taskToUpdate: Task | undefined = updatedTasks[index];
  
    if (taskToUpdate !== undefined) {
      updatedTasks[index] = {
        ...taskToUpdate,
        task: value,
      };
  
      setTasks(updatedTasks);
    }
  };

  const handleCheckboxChange = (index: number): void => {
    const updatedTasks: Task[] = [...tasks];
    const taskToUpdate: Task | undefined  = updatedTasks[index];
  
    if (taskToUpdate !== undefined) {
      updatedTasks[index] = {
        ...taskToUpdate,
        done: !taskToUpdate.done || false,
      };
    }
    
    // Sort the tasks by createdAt field
    updatedTasks.sort((a, b) => {
      if (a.done && !b.done) return 1;
      if (!a.done && b.done) return -1;
      return a.createdAt.getTime() - b.createdAt.getTime();
    });
    
    setTasks(updatedTasks);
  };

  const handleAddTask = (e: React.FormEvent): void => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, done: false, createdAt: new Date() }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </form>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'task-done' : 'task-undone'}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleCheckboxChange(index)}
            />
            <input
              type="text"
              value={task.task}
              onChange={(e) => handleInputChange(index, e.target.value)}
              readOnly={task.done}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;