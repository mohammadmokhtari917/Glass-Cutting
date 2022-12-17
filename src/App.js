import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import HomePage from './components/Homepage/Homepage';
import Order from './components/Order/Order';

const App = () => {
  return (
    <BrowserRouter>

      <div className="App">

        <Toolbar />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/order" exact element={<Order />} />
          <Route render={() => <h1>not Found</h1>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}


export default App;
