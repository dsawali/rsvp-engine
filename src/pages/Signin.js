import React, { Component } from 'react';
import Button from '../component/Button';
import BasicInput from '../component/BasicInput';

import './Signin.css';

import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';


class Signin extends Component {
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="password" placeholder="password" />
                <input type="submit" value="submit" />
            </form>
        )
    }

}

export default Signin;