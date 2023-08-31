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
      const formattedTask = newTask.charAt(0).toUpperCase() + newTask.slice(1);
      setTasks([...tasks, { task: formattedTask, done: false, createdAt: new Date() }]);
      setNewTask('');
    }
  };

  return (
    <div className='w-80'>
        <form onSubmit={handleAddTask} className='my-4'>
          <input
            type="text"
            placeholder="Add todo item"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='bg-transparent p-2 border-b border-charcoal-600 w-full text-white'
          />
        </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'line-through flex row items-center' : 'flex row items-center'}>
            <div
              onClick={() => handleCheckboxChange(index)}
              className={`w-6 h-6 bg-charcoal-600 rounded-full flex items-center justify-center cursor-pointer ${task.done ? 'charcoal-800' : 'charcoal-600'}`}
            >
              {task.done && <div className="w-4 h-4 bg-charcoal-800 rounded-full"></div>}
            </div>
            <div
              contentEditable={!task.done}
              onBlur={(e) => handleInputChange(index, e.currentTarget.innerHTML)}
              className={`bg-transparent p-2`}
              dangerouslySetInnerHTML={{ __html: task.task }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;