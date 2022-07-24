import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    // state = {
    //     counters: [
    //         { id: 1, value: 0 },
    //         { id: 2, value: 0 },
    //         { id: 3, value: 0 },
    //         { id: 4, value: 0 },
    //         { id: 5, value: 0 }
    //     ]
    // };

    // handleIncrement = (counter) => {
    //     console.log('Event increment handler called', counter.id);
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;
    //     // console.log(this.state.counters[index]);
    //     this.setState({ counters });
    //     console.log(counters);
    // }

    // handleDelete = (counterId) => {
    //     console.log('Event delete handler called',counterId);
    //     const counters = this.state.counters.filter(c => c.id !== counterId);
    //     this.setState({counters})
    // }

    // handleReset = () => {
    //     this.state.counters.map(c => {
    //         c.value = 0;
    //         return c;
    //     });
    //     this.setState({ Counters });
    // }

    render() { 
        const {counters, onDecrement, onIncrement, onDelete, onReset} = this.props;
        // console.log('Counters rendered');
        
        return (
            <div>
                <button 
                    // onClick={this.handleReset}
                    // onClick={this.props.onReset}
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                
                {/* {this.state.counters.map(counter => ( */}
                {/* {this.props.counters.map(counter => ( */}
                {counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        // onIncrement={this.handleIncrement}
                        // onIncrement={this.props.onIncrement}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        // onDelete={this.handleDelete} 
                        // onDelete={this.props.onDelete} 
                        onDelete={onDelete} 
                        // id={counter.id} 
                        // value={counter.value}
                        counter={counter}
                    >
                        {/* <h4>Counter # {counter.id}</h4> */}
                    </Counter>
                ))}

                {/* <Counter/>
                <Counter/>
                <Counter/>
                <Counter/>
                <Counter/> */}

            </div>
        );
    }
}
 
export default Counters;