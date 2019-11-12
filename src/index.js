import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Nav from './client/component/Navbar';
import Landing from './client/pages/Landing';
import SignupForm from './client/pages/SignupForm';
import Signin from './client/pages/Signin';

import notFound404 from './client/pages/errors/404';

const routing = (
    <Router>
        <Nav />
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
            <>
                <div className="App">
                    { routing }
                </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;