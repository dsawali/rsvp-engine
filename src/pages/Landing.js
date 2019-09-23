import React, { Component } from 'react';

import Button from '../component/Button';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';


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
            <div>
                <Link to="/signup">
                    <Button text={signupText} />
                </Link>
                <div>
                    <Button text={signInText} />
                </div>
            </div>
        );
    }
}

export default Landing;