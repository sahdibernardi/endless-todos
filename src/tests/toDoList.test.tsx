import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/ToDoList';

describe('TodoList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Initial State: Renders add task input', () => {
    render(<TodoList/>);
    const addTaskInput = screen.getByPlaceholderText('Add todo item');
    expect(addTaskInput).toBeInTheDocument();
  });

  test('Adds a new task', () => {
    render(<TodoList />);
    const addTaskInput = screen.getByPlaceholderText('Add todo item');

    fireEvent.change(addTaskInput, { target: { value: 'My Task' } });
    fireEvent.keyDown(addTaskInput, { key: 'Enter' });

    const newTask = screen.getByText('My Task');
    expect(newTask).toBeInTheDocument();
  });

  // test('marks a task as done when checkbox is clicked', () => {
  //   const mockTasks = [
  //     { task: 'Task 1', done: false, createdAt: new Date() },
  //     { task: 'Task 2', done: false, createdAt: new Date() },
  //   ];
  //   localStorage.setItem('tasks', JSON.stringify(mockTasks));

  //   render(<TodoList />);
  //   const taskCheckbox = screen.getByRole('checkbox', { name: 'Task 1' });

  //   fireEvent.click(taskCheckbox);

  //   const doneTask = screen.getByText('Task 1');
  //   expect(doneTask).toHaveClass('line-through');
  // });

  // test('edits a task', () => {
  //   const mockTasks = [
  //     { task: 'Task 1', done: false, createdAt: new Date() },
  //     { task: 'Task 2', done: false, createdAt: new Date() },
  //   ];
  //   localStorage.setItem('tasks', JSON.stringify(mockTasks));

  //   render(<TodoList />);
  //   const taskToEdit = screen.getByText('Task 1');

  //   fireEvent.click(taskToEdit);
  //   const taskEditField = screen.getByDisplayValue('Task 1');

  //   fireEvent.change(taskEditField, { target: { value: 'Edited Task 1' } });
  //   fireEvent.blur(taskEditField);

  //   const editedTask = screen.getByText('Edited Task 1');
  //   expect(editedTask).toBeInTheDocument();
  // });
});
