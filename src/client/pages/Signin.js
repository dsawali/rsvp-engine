import React, { Component } from 'react';
import Button from '../component/Button';
import BasicInput from '../component/BasicInput';

import './Signin.scss';

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
                <input type="text" className="inputtext" name="email" placeholder="Email" />
                <input type="password" className="inputtext" name="password" placeholder="Password" />
                <button type="submit" className="btn-submit" value="submit">Submit</button>
            </form>
        )
    }

}

export default Signin;