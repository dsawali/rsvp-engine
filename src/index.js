import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Landing from './client/pages/Landing';
import SignupForm from './client/pages/SignupForm';
import Signin from './client/pages/Signin';
import Nav from './client/component/Navbar';

const routing = (
    <Router>
        <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route path="/signin" component={Signin} />
            <Route path="/" component={Landing} />
        </Switch>
    </Router>
)

const navigation = (
    <Nav />
)

class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    { navigation}
                    { routing }
                </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;