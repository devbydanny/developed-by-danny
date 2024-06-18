import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import DevelopedByDanny from './pages/DevelopedByDanny/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import App from './pages/App/index.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <DevelopedByDanny />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: 'home',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
