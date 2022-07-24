import React, { Component } from 'react';

// // State less functional components //this.props doesn't work

// const Navbar = (props) => {
const Navbar = ({totalCounters}) => {
    // console.log('Navbar rendered');

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar 
                    <span className="badge badge-pill badge-success m-2">
                        {/* {props.totalCounters} */}
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}
 
export default Navbar;


// // Class components

// class NavBar extends Component {
//     render() { 
//     // console.log('Navbar rendered');
//         return (
//             <nav className="navbar bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         Navbar 
//                         <span className="badge badge-pill badge-success m-2">
//                             {this.props.totalCounters}
//                         </span>
//                     </a>
//                 </div>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;