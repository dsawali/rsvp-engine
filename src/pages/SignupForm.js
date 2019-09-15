import React, { Component } from 'react';
import Button from '../component/Button';

import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                This is the signup form page
                <Link to="/">
                    <Button text={'go back home'} />
                </Link>
            </div>
        )
    }

}

export default SignupForm;