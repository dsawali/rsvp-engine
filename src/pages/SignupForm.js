import React, { Component } from 'react';
import Button from '../component/Button';
import BasicInput from '../component/BasicInput';

import './SignupForm.scss';

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
            <div className="signup-wrapper">
                <Link to="/">
                    <button>go back home</button>
                </Link>
                <div className="form-block signup-block">
                    <h2 className="heading-main"> Join us and get started, </h2>
                    <form className="form input" onSubmit={this.handleSubmit}>
                        <label>
                            First name:
                            <input className="inputtext" type="text" name="firstname" placeholder="" />
                        </label>
                        <label>
                            Last name:
                            <input className="inputtext" type="text" name="lastname" placeholder="" />
                        </label>
                        <label>
                            Email:
                            <input className="inputtext" type="email" name="email" placeholder="" />
                        </label>
                        <label>
                            Password:
                            <input className="inputtext" type="password" name="password" placeholder="" />
                        </label>
                        <label>
                            Confirm Password:
                            <input className="inputtext" type="password" name="password" placeholder="" />
                        </label>
                        <input className="btn-submit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }

}

export default SignupForm;