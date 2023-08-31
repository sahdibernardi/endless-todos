# Endless Todos

Endless Todos is a simple TypeScript application built with Next that allows you to manage a list of tasks.

## Functionalities
- Add new tasks
- Mark tasks as done which automatically moves them to the bottom of the list
- Mark tasks as undone which automatically moves them to the previous place of the list according to their creation date
- Update task names
- The application uses local storage to persist tasks even after closing the browser.

## Demo
It was deployed using Vercel and can be accessed here: https://endless-todos-psi.vercel.app/

## How to run the application
- Clone the repository
`git clone https://github.com/your-username/endless-todos.git`
- Navigate to the project directory:
`cd endless-todos`
- in the root directory, create a `.env` file and add the environment variables described in `.env.example` according to your local environment
- Run `npm install` to install the dependencies
- Run `npm run dev` or `npm start` to start the application

## How to create and run tests
An automated testing environment (jest) is already configured for TypeScript and and containing a simple test, for demonstration purposes only.

Run tests with:
`npm test`

Developing more test files is possible, as long as their names ends with `.test.tsx`.

## Local Storage
The application uses local storage to persist tasks. This means your tasks will still be available even after you close the browser. The tasks are stored in your browser's local storage and will be loaded when you reopen the application.

To get rid of all the tasks, you can either clear your browser's local storage or delete the `tasks` key from the local storage manually.

## Stacks and Requirements
- [Next.js](https://nextjs.org) || v13.4.2
- [React](https://reactjs.org) || v18.2.0
- [Node.js](https://nodejs.org) || v18.16.0
- [TypeScript](https://www.typescriptlang.org) || v5.0.4
- [Prisma](https://prisma.io) || v.5.1.1
- [Tailwind CSS](https://tailwindcss.com) || v.3.3.3


Original figma design and notes for refference: https://www.figma.com/file/V7AUkKgaihm57ATbkRNjhP/Endless-Todos?node-id=0%3A1&mode=dev
