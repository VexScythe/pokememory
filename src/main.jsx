import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Navbar } from './components/Navbar.jsx';
import { Game } from './components/Game.jsx';
import { Instructions } from './components/Instructions.jsx';
import { Score } from './components/Score.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Game',
    element: (
      <>
        <Navbar />
        <Game />
      </>
    ),
  },
  {
    path: '/Instructions',
    element: (
      <>
        <Navbar />
        <Instructions />
      </>
    ),
  },
  {
    path: '/Score',
    element: (
      <>
        <Navbar />
        <Score />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
