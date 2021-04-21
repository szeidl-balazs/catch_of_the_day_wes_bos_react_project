import React from 'react';
//import './css/style.css';
import StorePicker from './Components/StorePicker';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Order from './Components/Order';
import SampleFishes from '../src/Components/SampleFishes';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}

  };

  addFish = fish => {
    //if the fishes is an array: this.state.fishes.push(fish);

    //1. mutation: take a copy of the existing state
    const fishes = { ...this.state.fishes };

    //2. add new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    //3. Set the new fishes onject to state
    this.setState({
      fishes: fishes
    });
    
    console.log('adding a fish');
  }

  loadSampleFishes = () => {
    this.setState({fishes: SampleFishes});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <StorePicker/>
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order /> 
        <Inventory addFish ={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
           
      </div>
    );
  
  }
}

export default App;
