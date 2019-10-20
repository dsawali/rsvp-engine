import React, { Component } from 'react';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Button from '../component/Button';
import Signin from './Signin';
import Signup from './SignupForm';

import './Landing.scss';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const signupText = 'Sign up';
        const signInText = 'Sign in';
        return(
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
                            <a href="#" className="link-signup">Sign up</a> 

                        </Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Landing;