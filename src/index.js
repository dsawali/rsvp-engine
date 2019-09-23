import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch ,Link, BrowserRouter as Router } from 'react-router-dom';

import Landing from './pages/Landing';
import SignupForm from './pages/SignupForm';


const routing = (
    <Router>
        <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route path="/" component={Landing} />
        </Switch>
    </Router>
)

class App extends Component {
    // For server testing purpose
    componentDidMount(){
        fetch('/hello')
            .then(res => res.json())
            .then(result => console.log(result))
    }

    render() {
        return (
            <div className="App">
                {routing}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;