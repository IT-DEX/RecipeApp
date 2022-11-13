import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Glossary from './Glossary';
import Recipes from './Recipes';

function App() {
  return <div>
    <Router>
  
    <nav>
      <Link to="/"           className='link'>Home</Link>
      <Link to="/recipes"    className='link'>Recipes</Link>
      <Link to="/glossary"   className='link'>Glossary</Link>
    </nav>
  
    <Routes>
      <Route path='/'           element={<Home/>} />
      <Route path='/recipes'    element={<Recipes/>} />
      <Route path='/glossary'   element={<Glossary/>} />
    </Routes>
    
  </Router>

</div>
}

export default App;
