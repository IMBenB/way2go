import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './view/login/login'
import Main from './view/main/main'

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
      <Route path='/' component={Login} />
      <Route path='/Main' component={Main} />
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
