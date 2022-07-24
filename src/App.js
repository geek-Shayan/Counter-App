import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

// function App() {
//   return (
//     <div>
//       <NavBar/>
//       <main className='container'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counters/>
//       </main>
//     </div>
//   );
// }


class App extends Component {

  constructor() {
    super();
    // console.log('App constructor');
  }

  componentDidMount() {
    // console.log('App mounted');
  }
  
  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 }
    ]
  };

  handleDecrement = (counter) => {
    // console.log('counter decrement');
    console.log('Event decrement handler called', counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
    console.log(counters);
  }
  
  handleIncrement = (counter) => {
    console.log('Event increment handler called', counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });
    console.log(counters);
  }
  
  handleDelete = (counterId) => {
    console.log('Event delete handler called',counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  }
  
  handleReset = () => {
    this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ Counters });
  }
  
  render() {
    // console.log('App rendered');
    
    return (
      <div>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          <img src={logo} className="App-logo" alt="logo" />
          <Counters
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}
export default App;
