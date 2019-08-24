import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    Hello
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;