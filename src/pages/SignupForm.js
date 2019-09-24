import React, { Component } from 'react';
import Button from '../component/Button';
import BasicInput from '../component/BasicInput';

import './SignupForm.css';

import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                This is the signup form page
                <Link to="/">
                    <Button text={'go back home'} />
                </Link>
                <div className="signup form-block">
                    <p>Sign up</p>
                    <form className="form input" onSubmit={this.handleSubmit}>
                        <input type="text" name="firstname" placeholder="firstname" />
                        <input type="text" name="lastname" placeholder="lastname" />
                        <input type="text" name="email" placeholder="email" />
                        <input type="text" name="password" placeholder="password" />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }

}

export default SignupForm;