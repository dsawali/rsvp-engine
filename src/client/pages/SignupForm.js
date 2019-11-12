import React, { Component } from 'react';
import validation from '../helper/Validator';
import './SignupForm.scss';
import ErrorMessages from '../component/errors/FormError';

import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {
                firstname: [],
                lastname: [],
                email: [],
                password: [],
                confirmPassword: []
            }
        }
    }

    handleFirstname = (e) => {
        const err = validation.firstname(e.target.value);
        
        const errorCopy = { ...this.state.errors, firstname: err };
        
        this.setState({
            ...this.state,
            firstname: e.target.value,
            errors: errorCopy
        });
    }

    handleLastname = (e) => {
        const err = validation.lastname(e.target.value);
        
        const errorCopy = {...this.state.errors, lastname: err };

        this.setState({
            ...this.state,
            lastname: e.target.value,
            errors: errorCopy
        });
    }

    handleEmail = (e) => {
        const err = validation.email(e.target.value);
        
        const errorCopy = {...this.state.errors, email: err };

        this.setState({
            ...this.state,
            email: e.target.value,
            errors: errorCopy
        });

       
    }

    handlePassword = (e) => {
        const err = validation.password(e.target.value, this.state.confirmPassword);
        
        const errorCopy = {...this.state.errors, password: err };

        this.setState({
            ...this.state,
            password: e.target.value,
            errors: errorCopy
        });
    }

    handleConfirmPassword = (e) => {
        const err = validation.confirmPassword(this.state.password, e.target.value);
        
        const errorCopy = {...this.state.errors, confirmPassword: err };

        this.setState({
            ...this.state,
            confirmPassword: e.target.value,
            errors: errorCopy
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.password,
            this.state.confirmPassword
        )
        
        alert(this.state.errors.password);

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
                        <div className="inputblock">
                            <label>
                                First name:
                                <input 
                                    className="inputtext" 
                                    value={this.state.firstname} 
                                    onChange={this.handleFirstname} 
                                    type="text"
                                    name="firstname" 
                                    size="30"
                                    placeholder=""
                                    required
                                />
                                {this.state.errors.firstname.map((x, index) => 
                                    <ErrorMessages key={index} message={x}/>
                                )}

                            </label>
                        </div>
                        <div className="inputblock">
                            <label>
                                Last name:
                                <input 
                                    className="inputtext" 
                                    value={this.state.lastname} 
                                    onChange={this.handleLastname} 
                                    type="text" 
                                    name="lastname"
                                    size="30" 
                                    placeholder=""
                                    required 
                                />
                                {this.state.errors.lastname.map((x, index) => 
                                    <ErrorMessages key={index} message={x}/>
                                )}
                            </label>
                        </div>
                        <div className="inputblock">
                            <label>
                                Email:
                                <input 
                                    className="inputtext" 
                                    value={this.state.email} 
                                    onChange={this.handleEmail} 
                                    type="email" 
                                    name="email"
                                    size="40" 
                                    placeholder=""
                                    required 
                                />
                                {this.state.errors.email.map((x, index) => 
                                    <ErrorMessages key={index} message={x}/>
                                )}
                            </label>
                        </div>
                        <div className="inputblock">
                            <label>
                                Password:
                                <input 
                                    className="inputtext" 
                                    value={this.state.password} 
                                    onChange={this.handlePassword} 
                                    type="password" 
                                    name="password"
                                    size="30" 
                                    placeholder=""
                                    required
                                />
                                {this.state.errors.password.map((x, index) => 
                                    <ErrorMessages key={index} message={x}/>
                                )}
                            </label>
                        </div>
                        <div className="inputblock">
                            <label>
                                Confirm Password:
                                <input 
                                    className="inputtext" 
                                    value={this.state.confirmPassword} 
                                    onChange={this.handleConfirmPassword} 
                                    type="password" 
                                    name="password"
                                    size="30" 
                                    placeholder=""
                                    required
                                />
                                {this.state.errors.confirmPassword.map((x, index) => 
                                    <ErrorMessages key={index} message={x}/>
                                )}
                            </label>
                        </div>
                        <input className="btn-submit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }

}

export default SignupForm;