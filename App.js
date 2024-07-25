import React from 'react';
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Registration from './Component/Registration';
import Login from './Component/Login';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' Component={Registration} />
      <Route path='/Login' Component={Login} />
      <Route path='/Home' Component={Home}/>
    </Routes>
    </div>
  );
}

export default App;
