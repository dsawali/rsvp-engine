import React, { Component } from 'react';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import './Navbar.scss';
import Button from './Button';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="navigation sticky">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li> 
                    <li>
                        <a href="#">Sign in</a>
                    </li> 
                    <li>
                        <button className="btn-nav" type="button">Join</button>
                    </li>  
                </ul>
            </div>
        );
    }
}

export default Nav;