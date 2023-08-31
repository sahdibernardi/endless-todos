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
});
