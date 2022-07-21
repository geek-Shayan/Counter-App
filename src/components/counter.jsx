import React, { Component } from 'react';
class Counter extends Component {
    
    state = {
        // value: 0,
        value: this.props.value,
        tags: [ ],
        // tags: ['tag1', 'tag2', 'tag3'],
        // imageUrl2: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
    };

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

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    }

    render() { 

        // console.log("props", this.props);

        return (
            <div>
                {/* <h4>Counter #{this.props.id}</h4> */}
                {/* {this.props.children} */}
                {/* <img src={this.state.imageUrl2} width="200px" height="100px" alt="" /> */}
                <span className={this.getBadgeClasses()} style={{fontSize: 10}}>{this.formatCount() }</span>
                
                {/* <button onClick={this.handleIncrement} className= "btn btn-success btn-sm">Increment</button> */}
                {/* <button onClick={this.doHandleIncrement} className= "btn btn-success btn-sm">Increment</button> */}
                {/* <button onClick={() => {this.handleIncrement({ id: 8 })}} className= "btn btn-success btn-sm">Increment</button> */}
                <button onClick={() => {this.handleIncrement({ product: 'product id dynamic' })}} className= "btn btn-success btn-sm">Increment</button>
                
                <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
                
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

    renderTags() {
        if (this.state.tags.length === 0) {return <p>There are no Tags!</p>}
        else { return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "danger" : classes += this.state.value <= 3 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: cnt } = this.state;
        return cnt === 0 ? <h4>zero</h4> : <h4>{cnt}</h4>;
        
        // if (cnt === 0) {
        //     return 'zero';
        // }
        // else{
        //     return cnt;
        // }

    }
}
 
export default Counter;