import React, { Component } from 'react';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Button from '../component/Button';
import Signin from './Signin';

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
                <label className="signup-landing">
                    Sign up:
                    <Link to="/signup">
                        <Button text={signupText} />
                    </Link>
                </label>
                <label className="signin-landing">
                    Sign in:
                    <Signin />
                </label>
                {/* <Link to="/signin">
                    <Button text={signInText} />
                </Link> */}
            </div>
        );
    }
}

export default Landing;