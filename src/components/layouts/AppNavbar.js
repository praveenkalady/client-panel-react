import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-primary navbar-dark mb-4">
                <div className="container">
                 <NavLink to="/" className="navbar-brand">Client Panel</NavLink>
                 <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                 <span className="navbar-toggler-icon"></span>   
                 </button>
                 <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NavLink to="/" className="nav-link">Dashboard</NavLink>
                        </li>
                    </ul>
                 </div>
                </div>
            </nav>
        );
    }
}

export default AppNavbar;
