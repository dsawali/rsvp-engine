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
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <span>About</span>
                    </li> 
                    <li>
                        <span>Sign in</span>
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