import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Posts } from './components/Post'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts/:id" element={<Posts/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/redirect" element={<Redirect/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
