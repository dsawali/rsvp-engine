import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Landing from './pages/Landing';
import SignupForm from './pages/SignupForm';
import Signin from './pages/Signin';
import Nav from './component/Navbar';

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