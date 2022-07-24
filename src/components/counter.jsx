import React, { Component } from 'react';
class Counter extends Component {
    
    // state = {
    //     // value: 0,
    //     // value: this.props.value,
    //     value: this.props.counter.value,
    //     // tags: [ ],
    //     // tags: ['tag1', 'tag2', 'tag3'],
    //     // imageUrl2: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
    // };

    // constructor() {
    //     super();
    //     // console.log("in constructor",this);
    //     this.handleIncrement.bind(this);
    // }
    
    // handleIncrement() {
    //     console.log("Increment Clicked", this);
    // }
    
    // handleIncrement = () => {
    //     // console.log("Increment Clicked", this);
    //     // this.state.count++;
    //     // console.log(this.state.count);

    //     this.setState({ count: this.state.count + 1 });

    // }

    // handleIncrement = (product) => {
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1 });
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // }

    render() { 
        // console.log("props", this.props);
        const { counter } = this.props; 
        // console.log('Counter rendered');

        return (
            <div className='row m-1'>
                {/* <h4>Counter #{this.props.id}</h4> */}
                {/* {this.props.children} */}
                {/* <img src={this.state.imageUrl2} width="200px" height="100px" alt="" /> */}
                
                <div className="div col-2">
                    <button onClick={() => this.props.onDecrement(counter)} className= "btn btn-danger btn-sm" disabled={counter.value === 0} ><b>-</b></button>
                </div>
                
                <div className="div col-2">
                    {/* <span className={this.getBadgeClasses()} style={{fontSize: 10}}>{this.formatCount() }</span> */}
                    <span className={this.getBadgeClasses()}>{this.formatCount() }</span>
                </div>
                
                <div className="div col-1">
                    {/* <button onClick={this.handleIncrement} className= "btn btn-success btn-sm">Increment</button> */}
                    {/* <button onClick={this.doHandleIncrement} className= "btn btn-success btn-sm">Increment</button> */}
                    {/* <button onClick={() => {this.handleIncrement({ id: 8 })}} className= "btn btn-success btn-sm">Increment</button> */}
                    {/* <button onClick={() => {this.handleIncrement({ product: 'product id dynamic' })}} className= "btn btn-success btn-sm">Increment</button> */}
                    {/* <button onClick={() => this.props.onIncrement(this.props.counter)} className= "btn btn-success btn-sm">Increment</button> */}
                    <button onClick={() => this.props.onIncrement(counter)} className= "btn btn-success btn-sm"><b>+</b></button>
                </div>

                <div className="div col-1">
                    {/* <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button> */}
                    {/* <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button> */}
                    {/* <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button> */}
                    <button onClick={() => this.props.onDelete(counter.id)} className="btn btn-danger btn-sm"><b>x</b></button>
                </div>
                

                
                
                
                {/* <div>
                    {this.state.tags.length === 0 && "Please create a new tag"}
                    {this.renderTags()}
                </div> */}
            </div>
            
            // <React.Fragment>
            //     <h1>Hello world</h1>
            //     <button>Increment</button>
            // </React.Fragment>
        );
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) {return <p>There are no Tags!</p>}
    //     else { return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
    // }

    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.value === 0 ? "danger" : classes += this.state.value <= 3 ? "warning" : "primary";
    //     return classes;
    // }

    getBadgeClasses() {
        let classes = "badge badge-pill badge-";
        classes += this.props.counter.value === 0 ? "warning" : classes += this.props.counter.value <= 3 ? "primary" : "secondary";
        return classes;
    }

    // formatCount() {
    //     const { value: cnt } = this.state;
    //     return cnt === 0 ? <h6>zero</h6> : <h6>{cnt}</h6>;
        
    //     // if (cnt === 0) {
    //     //     return 'zero';
    //     // }
    //     // else{
    //     //     return cnt;
    //     // }

    // }

    formatCount() {
        const { value: cnt } = this.props.counter;
        return cnt === 0 ? <h6>zero</h6> : <h6>{cnt}</h6>;
    }
}
 
export default Counter;