import React from 'react';
import {Route,BrowserRouter,Routes}from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/competences' element={<Knowledges/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;