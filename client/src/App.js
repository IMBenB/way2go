import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './view/login/login'
import Main from './view/main/main'
import Orders from './view/oreders/Orders';
import orderForm from './view/oreders/orderForm';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
      <Route path='/Orders' component={Orders} />
      <Route path='/Login' component={Login} />
      <Route path='/Main' component={Main} />
      <Route path='/orderForm' component={orderForm} />
      
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
