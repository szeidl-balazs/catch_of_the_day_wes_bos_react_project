import React from 'react';
//import './css/style.css';
import StorePicker from './Components/StorePicker';
import Header from './Components/Header';
import Inventory from './Components/Inventory';
import Order from './Components/Order';
import SampleFishes from '../src/Components/SampleFishes';
import Fish from './Components/Fish';
/*import { v4 as uuidv4 } from 'uuid';*/

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

  addToOrder = (key) => {
    //1. take a copy of state
    const order = { ...this.state.order };
    //2. either add to the order or update the order (number) in our order
    order[key] = order[key] + 1 || 1;
    //3. call setState to update the state object
    this.setState({order: order});
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <StorePicker/>
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => 
              <Fish 
                key={key} 
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
                index={key}
              />)}
            </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/> 
        <Inventory addFish ={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
           
      </div>
    );
  
  }
}

export default App;
