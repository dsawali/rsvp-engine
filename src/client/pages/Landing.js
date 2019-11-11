import React, { Component } from 'react';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Nav from '../component/Navbar';
import Signin from './Signin';


import './Landing.scss';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <>
            <div className="hero">
                <p className="bruh">hello</p>
            </div>
            <div className="landing-wrapper">
                <div className="split left">
                    <div className="center">
                        <p className="signin-landing">
                            Sign in:
                        </p>
                        <Signin />
                    
                    </div>
                </div>
                <div className="split right">
                    <div className="center">
                        <p className="signup-landing">
                            Or if you dont have an account, 
                        </p>
                        <Link to="/signup">
                            <span className="link-signup">Sign up</span> 
                        </Link>
                    </div>
                </div>     
            </div>
            </>
        );
    }
}

export default Landing;