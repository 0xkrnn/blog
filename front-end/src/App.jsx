import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Post from './contexts/Post';
import SinglePost from './pages/SinglePost';

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path='/blogs'>
          <Route path='/blogs/' element={<Blogs />} />
          <Route path='/blogs/:id' element={<SinglePost />} />
        </Route >
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
  );
}

export default App;