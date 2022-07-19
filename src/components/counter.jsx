import React, { Component } from 'react';
class Counter extends Component {
    
    state = {
        count: 1,
        tags: [ ],
        // tags: ['tag1', 'tag2', 'tag3'],
        imageUrl2: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
    };



    render() { 
        return (
            <div>
                <img src={this.state.imageUrl2} width="200px" height="100px" alt="" />
                <span className={this.getBadgeClasses()} style={{fontSize: 10}}>{this.formatCount() }</span>
                <button className= "btn btn-success btn-sm">Increment</button>
                
                <div>
                    {this.state.tags.length === 0 && "Please create a new tag"}
                    {this.renderTags()}
                </div>
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
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count: cnt } = this.state;
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