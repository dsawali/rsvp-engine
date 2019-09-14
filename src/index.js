import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Landing from './pages/Landing';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Landing />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;