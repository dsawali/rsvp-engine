import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Landing from './pages/Landing';
import SignupForm from './pages/SignupForm';
import Signin from './pages/Signin';


const routing = (
    <Router>
        <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route path="/signin" component={Signin} />
            <Route path="/" component={Landing} />
        </Switch>
    </Router>
)

class App extends Component {
    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

ReactDOM.render(routing, document.querySelector('#root'));

export default App;