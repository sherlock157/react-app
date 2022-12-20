import React from "react";
import {Link} from "react-router-dom"
class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-secondary mb-4">
               <div className="container">
                   <Link to="/" className="navbar-brand">
                       <img src="/logo192.png" alt="logo" width="50"/>
                   </Link>
                   <ul className="navbar-nav">
                       <li className="nav-item"><Link to="/store" className="nav-link">Store</Link></li>
                       <li className="nav-item"><Link to="/counter" className="nav-link">Counter</Link></li>
                       <li className="nav-item"><Link to="/modal-video" className="nav-link">ModalVideo</Link></li>
                       <li className="nav-item"><Link to="/posts" className="nav-link">Posts</Link></li>
                       <li className="nav-item"><Link to="/store-api" className="nav-link">Store With API</Link></li>
                   </ul>
               </div>
            </nav>
        )
    }
}

export default NavBar