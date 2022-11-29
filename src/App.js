import React, { useEffect, useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import Page from './components/Page';
import Post from './components/Post/Post';
import Btn from './components/ui/Btn/Btn';
import Input from './components/ui/Input/Input';

function App() {

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: '123',
      content: 'erfgewpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
    },
    {
      id: 2,
      title: '123456',
      content: 'wpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
    },
    {
      id: 3,
      title: '1234568498749',
      content: 'wpe;ojrrg ihweit hgoiwueth goiuweh toiguheoituhgoieurh tiou hwortui',
    },
  ])

  
  return (
    <BrowserRouter>
    <Routes>
     
        <Route path={"/"} element={<Main setPosts={setPosts} posts={posts}/>} />
        <Route path={"/posts/:id"} element={<Page posts={posts}  />} />
      
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
