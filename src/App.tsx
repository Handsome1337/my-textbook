import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, Main, Root, Subject, Subjects, Task, Tasks } from 'routes';
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Main /> },
        { path: 'subjects', element: <Subjects /> },
        { path: 'subjects/:subjectId', element: <Subject /> },
        { path: 'tasks', element: <Tasks /> },
        { path: 'tasks/:taskId', element: <Task /> }
      ]
    }
  ],
  { basename: '/my-textbook/' }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
