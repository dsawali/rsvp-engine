import React, { Component } from 'react';
import Button from '../component/Button';
import BasicInput from '../component/BasicInput';

import './EventForm.scss';

import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';


class EventForm extends Component {
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
                This is the event creation form page
                <Link to="/">
                    <Button text={'go back home'} />
                </Link>
                <div className="signup form-block">
                    <p>Sign up</p>
                    <form className="form input" onSubmit={this.handleSubmit}>
                        <input type="text" name="event-name" placeholder="Event name" />
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

export default EventForm;