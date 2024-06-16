import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import Dashboard from './Dashboard.tsx';
import CreatePost from './CreatePost.tsx';
import Forum from './Forum.tsx';
import Post from './Post.tsx';
import Register from './Register.tsx';
import Login from './Login.tsx';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route index element={<Dashboard />} />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />} />
        <Route path='CreatePost' element={<CreatePost />} />
        <Route path='Forum' element={<Forum />} />
        <Route path='Post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
