import React from 'react';
import './css/style.css';
import StorePicker from './Components/StorePicker';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Order from './Components/Order';

function App() {
  return (
    <div className="catch-of-the-day">
      <StorePicker/>
      <div className="menu">
        <Header tagline="Fresh Seafood Market"/>
      </div>
      <Order /> 
      <Inventory />
         
    </div>
  );
}

export default App;
